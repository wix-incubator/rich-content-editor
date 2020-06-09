import React from 'react';
import { pick } from 'lodash';
import LineSpacingButton from './LineSpacingButton';
import { LINE_SPACING_TYPE } from '../types';
import { LineSpacingIcon } from '../icons';
import Panel from './LineSpacingPanel';
import {
  getAnchorBlockData,
  mergeBlockData,
  BUTTON_TYPES,
  decorateComponentWithProps,
  getModalStyles,
} from 'wix-rich-content-editor-common';

const lineHeight = 'line-height';
const spaceBefore = 'padding-top';
const spaceAfter = 'padding-bottom';

//TODO: refactor code duplication here and in the LineSpacingButton
export default config => {
  const { getEditorState, setEditorState, helpers, isMobile, theme } = config;

  let oldEditorState;

  let spacing;

  const updateSpacing = spacing => {
    const dynamicStyles = spacing;
    const newEditorState = mergeBlockData(oldEditorState, { dynamicStyles });
    setEditorState(newEditorState);
  };

  const getBlockSpacing = editorState => {
    const { dynamicStyles = {} } = getAnchorBlockData(editorState);
    return pick(dynamicStyles, [lineHeight, spaceBefore, spaceAfter]);
  };

  const save = spacing => {
    helpers?.closeModal?.();
    if (spacing) {
      updateSpacing(spacing);
    } else {
      setEditorState(oldEditorState);
    }
  };

  const cancel = () => {
    helpers?.closeModal?.();
    setEditorState(oldEditorState);
  };

  const LineSpacingPanel = () => {
    oldEditorState = getEditorState();
    spacing = getBlockSpacing(oldEditorState);
    return (
      <Panel
        onChange={updateSpacing}
        onSave={save}
        onCancel={cancel}
        spacing={spacing}
        {...config}
      />
    );
  };

  const openLineSpacingModal = () => {
    helpers?.openModal?.({
      modalStyles: getModalStyles({ fullScreen: false, isMobile }),
      helpers,
      isMobile,
      modalElement: LineSpacingPanel,
      theme,
    });
  };

  return {
    TextButtonMapper: () => ({
      LinsSpacing: {
        component: decorateComponentWithProps(LineSpacingButton, config[LINE_SPACING_TYPE]),
        isMobile: true,
        externalizedButtonProps: {
          onClick: () => openLineSpacingModal(),
          isActive: () => false,
          isDisabled: () => false,
          getIcon: () =>
            config[LINE_SPACING_TYPE]?.toolbar?.icons?.InsertPluginButtonIcon || LineSpacingIcon,
          tooltip: config.t('LineSpacingButton_Tooltip'),
          getLabel: () => '',
          type: BUTTON_TYPES.BUTTON,
        },
      },
    }),
  };
};
