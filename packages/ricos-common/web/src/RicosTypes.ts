import { RicosTheme } from './themeStrategy/themeTypes';
import {
  DraftContent,
  OnErrorFunction,
  SEOSettings,
  LinkPanelSettings,
  GetToolbarSettings,
  AnchorTarget,
  RelValue,
  EditorPlugin,
  ViewerPlugin,
} from 'wix-rich-content-common';
import { EditorState, EditorProps } from 'draft-js';
import { PreviewConfig } from 'wix-rich-content-preview';
import { ReactElement } from 'react';
import { RicosCssOverride } from './types';
import { DRAFT_EDITOR_PROPS } from './consts';
import { RichContentEditorProps } from 'wix-rich-content-editor';
import { RichContentViewerProps } from 'wix-rich-content-viewer';

export type RichContentProps = Partial<RichContentEditorProps | RichContentViewerProps>;

export interface RicosProps {
  /* Changes to this interface should also be reflected in the API docs */
  _rcProps?: RichContentProps; // For internal use by WixRicos only
  children?: ReactElement;
  content?: DraftContent;
  cssOverride?: RicosCssOverride;
  isMobile?: boolean;
  linkSettings?: LinkSettings;
  locale?: string;
  mediaSettings?: MediaSettings;
  onError?: OnErrorFunction;
  theme?: RicosTheme;
  textAlignment?: TextAlignment;
  /* Changes to this interface should also be reflected in the API docs */
}

interface EditorEvents {
  subscribe: (
    event: string,
    callback: () => Promise<{ type: string; data: unknown }>
  ) => (event: string, callback: () => Promise<{ type: string; data: unknown }>) => void;
  unsubscribe: (event: string, callback: () => Promise<{ type: string; data: unknown }>) => void;
  dispatch: (event: string) => Promise<unknown>;
}

export interface RicosEditorProps extends RicosProps {
  /* Changes to this interface should also be reflected in the API docs */
  plugins?: EditorPlugin[];
  draftEditorSettings?: DraftEditorSettings;
  linkPanelSettings?: LinkPanelSettings;
  modalSettings?: ModalSettings;
  onChange?: OnContentChangeFunction;
  placeholder?: string;
  toolbarSettings?: ToolbarSettings;
  onBusyChange?: OnBusyChangeFunction;
  injectedContent?: DraftContent;
  maxTextLength?: number;
  editorEvents1?: EditorEvents;
  editorEvents2?: EditorEvents;

  /* Changes to this interface should also be reflected in the API docs */
}

export interface RicosViewerProps extends RicosProps {
  /* Changes to this interface should also be reflected in the API docs */
  plugins?: ViewerPlugin[];
  preview?: PreviewConfig;
  seoSettings?: boolean | SEOSettings;
  /* Changes to this interface should also be reflected in the API docs */
}

export interface ContentStateGetterArgs {
  shouldRemoveErrorBlocks?: boolean;
}

export type ContentStateGetter = (args?: ContentStateGetterArgs) => DraftContent;

export interface EditorDataInstance {
  getContentState: ContentStateGetter;
  getContentTraits: () => {
    isEmpty: boolean;
    isContentChanged: boolean;
  };
  getEditorState: () => EditorState;
  refresh: (editorState: EditorState) => void;
  waitForUpdate: () => void;
  getContentStatePromise: () => Promise<DraftContent>;
}

export type OnContentChangeFunction = (content: DraftContent) => void;

export type OnBusyChangeFunction = (isBusy: boolean) => void;

// draft-js props - https://draftjs.org/docs/api-reference-editor
export type DraftEditorSettings = Pick<EditorProps, typeof DRAFT_EDITOR_PROPS[number]>;

export interface ModalSettings {
  openModal?: (data: Record<string, unknown>) => void;
  closeModal?: () => void;
  ariaHiddenId?: string;
  container?: HTMLElement;
  onModalOpen?: (data: Record<string, unknown>) => void;
  onModalClose?: () => void;
}

export interface ToolbarSettings {
  getToolbarSettings?: GetToolbarSettings;
  textToolbarContainer?: HTMLElement;
  useStaticTextToolbar?: boolean;
}

export type FullscreenProps = { backgroundColor?: string; foregroundColor?: string };

export interface MediaSettings {
  pauseMedia?: boolean;
  disableRightClick?: boolean;
  fullscreenProps?: FullscreenProps;
}

export interface LinkSettings {
  anchorTarget?: AnchorTarget;
  relValue?: RelValue;
}

export type TextAlignment = 'left' | 'right';
