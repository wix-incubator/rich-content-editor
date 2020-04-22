import generateRandomKey from './generateRandomKey';

const BlockType = {
  ATOMIC: 'atomic',
  PARAGRAPH: 'unstyled',
};

const IMAGE_PLUGIN = 'wix-draft-plugin-image';
class ContentStateBuilder {
  static Alignments = {
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
  };

  static Sizes = {
    ORIGINAL: 'original',
    INLINE: 'inline',
    SMALL: 'small',
    BEST_FIT: 'content',
    FULL_WIDTH: 'fullWidth',
  };

  constructor() {
    this.blocks = [];
  }

  getContent() {
    return this.convertToDraft(this.blocks);
  }

  createBlocks(text) {
    return {
      text,
      type: BlockType.PARAGRAPH,
    };
  }

  createImageBlock(src, config, metadata) {
    const { filename, height, width } = src;
    return {
      type: BlockType.ATOMIC,
      entityData: {
        type: IMAGE_PLUGIN,
        mutability: 'IMMUTABLE',
        data: {
          config: {
            ...config,
          },
          src: {
            file_name: filename, //eslint-disable-line
            original_file_name: filename, //eslint-disable-line
            id: filename.split('.')[0],
            height,
            width,
          },
        },
      },
    };
  }

  appendBlock(block) {
    this.blocks.push(block);
  }

  addText(text) {
    this.appendBlock(this.createBlocks(text));
    return this;
  }

  addImage(src, config, metadata) {
    this.appendBlock(this.createImageBlock(src, config, metadata));
    return this;
  }

  /*
    Privates
  */
  convertToDraft() {
    const contentState = { blocks: [], entityMap: {} };
    let entityIdx = 0;
    this.blocks.forEach(block => {
      const { entityData, type, entityRanges = [], ...blockData } = block;
      const parsedEntityRanges =
        type === BlockType.ATOMIC
          ? [
              {
                offset: 0,
                length: 1,
                key: 0,
              },
            ]
          : entityRanges;

      contentState.blocks.push({
        key: generateRandomKey(),
        type,
        inlineStyleRanges: [],
        depth: 0,
        text: ' ',
        entityRanges: parsedEntityRanges,
        data: {},
        ...blockData,
      });

      if (entityData) {
        contentState.entityMap[String(entityIdx++)] = entityData;
      }
    });

    return contentState;
  }
}

export default ContentStateBuilder;
