import { BUTTON_STYLES } from '../consts';
import { RichUtils, setTextAlignment } from 'wix-rich-content-editor-common';

/*
 * generateTextToolbarButtonProps
 * */
export default ({
  type,
  styles,
  icons,
  tooltipTextKey,
  t,
  getEditorState,
  setEditorState,
  externalOnClick,
  alignment,
}) => {
  const selectedBlockType = getSelectedBlockType();
  let blockTypeIndex = styles.findIndex(b => b === selectedBlockType);

  const getActiveBlockType = () => styles[blockTypeIndex] || 'unstyled';

  function getSelectedBlockType() {
    const editorState = getEditorState();
    const blockKey = editorState.getSelection().getStartKey();
    return editorState
      .getCurrentContent()
      .getBlockForKey(blockKey)
      .getType();
  }

  const getCurrentIcon = () => icons[blockTypeIndex] || icons[0];

  const getNextBlockTypeIndex = () => {
    const blockType = getActiveBlockType();
    const styleIndex = styles.findIndex(t => t === blockType);
    return styleIndex !== -1 ? (styleIndex + 1) % styles.length : 0;
  };

  const onBlockStyleClick = event => {
    event.preventDefault();
    blockTypeIndex = getNextBlockTypeIndex();
    const blockType = getActiveBlockType();
    setEditorState(RichUtils.toggleBlockType(getEditorState(), blockType));
  };

  const onAlignmentClick = () => {
    if (externalOnClick) {
      externalOnClick(styles[0]);
    } else {
      const newEditorState = setTextAlignment(getEditorState(), styles[0]);
      setEditorState(newEditorState);
    }
  };

  const onInlineStyleClick = event => {
    event.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(getEditorState(), styles[0]));
  };

  const isActiveBlockType = () => {
    const selectedBlockType = getSelectedBlockType();
    const activeBlockType = getActiveBlockType();
    return selectedBlockType !== 'unstyled' && selectedBlockType === activeBlockType;
  };

  const isActiveAlignment = () => alignment === styles[0];

  const isActiveInlineStyle = () => {
    return getEditorState()
      .getCurrentInlineStyle()
      .has(styles[0]);
  };
  const isActive = () =>
    ({
      [BUTTON_STYLES.BLOCK]: isActiveBlockType,
      [BUTTON_STYLES.INLINE]: isActiveInlineStyle,
      [BUTTON_STYLES.ALIGNMENT]: isActiveAlignment,
    }[type]());

  const onClick = e =>
    ({
      [BUTTON_STYLES.BLOCK]: onBlockStyleClick,
      [BUTTON_STYLES.INLINE]: onInlineStyleClick,
      [BUTTON_STYLES.ALIGNMENT]: onAlignmentClick,
    }[type](e));

  const getIcon = () =>
    ({
      [BUTTON_STYLES.BLOCK]: getCurrentIcon(),
      [BUTTON_STYLES.INLINE]: icons[0],
      [BUTTON_STYLES.ALIGNMENT]: icons[0],
    }[type]);

  const isDisabled = () =>
    ({
      [BUTTON_STYLES.BLOCK]: false,
      [BUTTON_STYLES.INLINE]: getEditorState()
        .getSelection()
        .isCollapsed(),
      [BUTTON_STYLES.ALIGNMENT]: false,
    }[type]);

  const getDataHook = () =>
    ({
      [BUTTON_STYLES.BLOCK]: `textBlockStyleButton_${getActiveBlockType()}`,
      [BUTTON_STYLES.INLINE]: `textInlineStyleButton_${styles[0]}`,
      [BUTTON_STYLES.ALIGNMENT]: `textAlignmentButton_${styles[0]}`,
    }[type]);

  return {
    dataHook: getDataHook(),
    tooltip: t(tooltipTextKey),
    getIcon,
    name,
    onClick,
    isActive,
    isDisabled,
    label: '',
    buttonType: 'button',
  };
};
