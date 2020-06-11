//@flow
import React from 'react';
import {
  MODIFIERS,
  hasLinksInSelection,
  removeLinksInSelection,
  EditorModals,
  getModalStyles,
  insertLinkAtCurrentSelection,
  LinkIcon,
  BUTTON_TYPES,
} from 'wix-rich-content-editor-common';
import createInlineButtons from './inline-buttons';
import TextLinkButton from './TextLinkButton';
import { LINK_TYPE } from '../types';

const openLinkModal = ({
  helpers,
  isMobile,
  anchorTarget,
  relValue,
  t,
  theme,
  getEditorState,
  setEditorState,
  uiSettings,
  closeInlinePluginToolbar,
}) => {
  const modalStyles = getModalStyles({ fullScreen: false, isMobile });
  if (helpers && helpers.openModal) {
    const modalProps = {
      helpers,
      modalStyles,
      isMobile,
      getEditorState,
      setEditorState,
      t,
      theme,
      anchorTarget,
      relValue,
      modalName: EditorModals.MOBILE_TEXT_LINK_MODAL,
      hidePopup: helpers.closeModal,
      uiSettings,
      insertLinkFn: insertLinkAtCurrentSelection,
      closeInlinePluginToolbar,
    };
    helpers.openModal(modalProps);
  } else {
    //eslint-disable-next-line no-console
    console.error(
      'Link plugin: failed to display Link modal dialog since helpers.openModal is not defined'
    );
  }
};

const linkTextButtonMapper /*: TextButtonMapper */ = config => ({
  TextButtonMapper: () => ({
    Link: {
      component: props => (
        <TextLinkButton
          insertLinkFn={insertLinkAtCurrentSelection}
          isActive={hasLinksInSelection(config.getEditorState())}
          closeInlinePluginToolbar={config.closeInlinePluginToolbar}
          tooltipText={config.t('TextLinkButton_Tooltip')}
          {...props}
        />
      ),
      keyBindings: [
        {
          keyCommand: {
            command: 'link',
            modifiers: [MODIFIERS.COMMAND],
            key: 'k',
          },
          commandHandler: editorState => {
            if (hasLinksInSelection(editorState)) {
              config.closeInlinePluginToolbar();
              return removeLinksInSelection(editorState);
            } else {
              openLinkModal(config);
            }
          },
        },
      ],
      externalizedButtonProps: {
        onClick: e => {
          e.preventDefault();
          openLinkModal(config);
        },
        isActive: () => hasLinksInSelection(config.getEditorState()),
        isDisabled: () => false,
        getIcon: () => config[LINK_TYPE]?.toolbar?.icons?.InsertPluginButtonIcon || LinkIcon,
        tooltip: config.t('TextLinkButton_Tooltip'),
        getLabel: () => '', // new key needed?
        type: BUTTON_TYPES.BUTTON,
      },
    },
  }),
  InlinePluginToolbarButtons: createInlineButtons(config),
  name: 'link', // TODO: use type instead string
});

export default linkTextButtonMapper;
