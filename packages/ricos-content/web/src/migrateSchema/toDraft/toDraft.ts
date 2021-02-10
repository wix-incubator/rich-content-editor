/* eslint-disable no-console */
import { RichContent, Node, Node_Type } from 'ricos-schema';
import { RicosContent, RicosContentBlock } from '../..';
import { genKey } from '../generateRandomKey';
import {
  BlockType,
  HeaderLevel,
  RICOS_NODE_TYPE_TO_DATA_FIELD,
  TO_DRAFT_LIST_TYPE,
} from '../consts';
import { DraftBlockType } from 'draft-js';
import { merge } from 'lodash';
import { createTextBlockData, createAtomicEntityData } from './getDraftEntityData';
import {
  getParagraphNode,
  mergeTextNodes,
  parseDecorations,
  parseInlineStyleDecorations,
  parseEntityDecorations,
} from './decorationParsers';

export const ensureDraftContent = (content: RichContent | RicosContent) =>
  'nodes' in content ? toDraft(content) : content;

export const toDraft = (ricosContent: RichContent): RicosContent => {
  const { nodes, metadata } = RichContent.toJSON(RichContent.fromJSON(ricosContent)) as RichContent; // using toJSON to remove undefined fields
  const draftContent: RicosContent = {
    blocks: [],
    entityMap: {},
  };
  let latestEntityKey = -1;

  const parseNodes = (index = 0) => {
    const node = nodes[index];
    if (node) {
      switch (node.type) {
        case Node_Type.BLOCKQUOTE:
          parseTextNodes(getParagraphNode(node), { type: BlockType.Blockquote, key: node.key });
          break;
        case Node_Type.CODEBLOCK:
          parseTextNodes(node, { type: BlockType.CodeBlock, key: node.key });
          break;
        case Node_Type.HEADING:
          if (!node.headingData) {
            console.log(`ERROR! Heading node with no data!`);
            process.exit(1);
          }
          parseTextNodes(node, { type: HeaderLevel[node.headingData.level], key: node.key });
          break;
        case Node_Type.ORDERED_LIST:
        case Node_Type.BULLET_LIST:
          parseListNode(node);
          break;
        case Node_Type.PARAGRAPH:
          parseTextNodes(node, { type: BlockType.Unstyled, key: node.key });
          break;
        default:
          if (RICOS_NODE_TYPE_TO_DATA_FIELD[node.type]) {
            parseAtomicNode(node);
          } else {
            console.log(`ERROR! Unknown node type "${node.type}"!`);
            process.exit(1);
          }
      }
      parseNodes(index + 1);
    }
  };

  const parseAtomicNode = (node: Node) => {
    latestEntityKey += 1;
    const entityMap = createAtomicEntityData(node, latestEntityKey);
    addBlock({
      key: node.key,
      type: BlockType.Atomic,
      text: ' ',
      entityRanges: [{ offset: 0, length: 1, key: latestEntityKey }],
    });
    draftContent.entityMap = { ...draftContent.entityMap, ...entityMap };
  };

  const parseListNode = (node: Node) => {
    node.nodes.forEach(listItem => {
      const [paragraph, childNode] = listItem.nodes;
      parseTextNodes(paragraph, {
        type: TO_DRAFT_LIST_TYPE[node.type],
        key: listItem.key,
      });
      if (childNode) {
        parseListNode(childNode);
      }
    });
  };

  const parseTextNodes = (node: Node, { type, key }: { type: DraftBlockType; key: string }) => {
    const { text, decorationMap } = mergeTextNodes(node.nodes);
    const { inlineStyleDecorations, entityDecorations } = parseDecorations(decorationMap, text);
    const inlineStyleRanges = parseInlineStyleDecorations(inlineStyleDecorations);
    const { entityRanges, entityMap, latestEntityKey: newLatestEntityKey } = parseEntityDecorations(
      entityDecorations,
      latestEntityKey
    );
    latestEntityKey = newLatestEntityKey;
    const { depth, ...data } = createTextBlockData(node);
    addBlock({
      key,
      type,
      text,
      depth,
      inlineStyleRanges,
      entityRanges,
      data,
    });
    draftContent.entityMap = { ...draftContent.entityMap, ...entityMap };
  };

  const addBlock = (blockProps?: Partial<RicosContentBlock>) => {
    const newBlock: RicosContentBlock = merge(
      {
        key: genKey(),
        type: BlockType.Unstyled,
        text: '',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      blockProps
    );
    draftContent.blocks = [...draftContent.blocks, newBlock];
  };

  parseNodes();

  draftContent.VERSION = metadata?.updatedVersion;
  return draftContent;
};
