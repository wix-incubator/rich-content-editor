/* eslint-disable fp/no-delete */
import { Node } from 'ricos-schema';
import {
  RICOS_NODE_TYPE_TO_DATA_FIELD,
  ENTITY_DECORATION_TO_MUTABILITY,
  FROM_RICOS_ENTITY_TYPE,
  TO_RICOS_DECORATION_TYPE,
} from '../consts';
import toSlugCase from 'to-slug-case';
import { RicosEntity, RicosEntityMap } from '../../..';
import { DraftTypedDecoration } from './decorationParsers';
import { convertDecorationToDraftData, convertNodeToDraftData } from './convertDraftPluginData';

const getNodeEntityData = (node: Node) => {
  const { type } = node;
  const draftPluginType = FROM_RICOS_ENTITY_TYPE[type];
  const data = convertNodeToDraftData(node);
  if (data === undefined) {
    // eslint-disable-next-line no-console
    console.error(`ERROR! Unknown entity type "${type}"!`);
    process.exit(1);
  }
  return { type: draftPluginType, data };
};

export const createDecorationEntityData = (
  decoration: DraftTypedDecoration,
  entityKey: number
): RicosEntityMap => {
  const { type, emojiData } = decoration;

  const data =
    emojiData ||
    convertDecorationToDraftData({
      ...decoration,
      type: TO_RICOS_DECORATION_TYPE[type],
    });
  if (data === undefined) {
    // eslint-disable-next-line no-console
    console.error(`ERROR! Unknown entity type "${type}"!`);
    process.exit(1);
  }

  const mutability = ENTITY_DECORATION_TO_MUTABILITY[type];

  return createEntity(entityKey, { type, mutability, data });
};

export const createAtomicEntityData = (node: Node, entityKey: number): RicosEntityMap => {
  const { type, data } = getNodeEntityData(node);
  return createEntity(entityKey, { type, mutability: 'IMMUTABLE', data });
};

export const createTextBlockData = (node: Node) => {
  const { textAlignment, dynamicStyles, depth } =
    node[RICOS_NODE_TYPE_TO_DATA_FIELD[node.type]] || {};
  return Object.assign(
    {},
    textAlignment !== undefined ? { textAlignment: textAlignment.toLowerCase() } : undefined,
    dynamicStyles !== undefined
      ? {
          dynamicStyles: Object.fromEntries(
            Object.entries(dynamicStyles).map(([key, value]) => [toSlugCase(key), value])
          ),
        }
      : undefined,
    depth ? { depth } : undefined
  );
};

const createEntity = (key: number, { type, mutability, data }: RicosEntity): RicosEntityMap => {
  return { [key.toString()]: { type, mutability, data } };
};
