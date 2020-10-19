import {
  simplePubsub,
  getToolbarTheme,
  TOOLBARS,
  DISPLAY_MODE,
  mergeToolbarSettings,
  isiOS,
} from 'wix-rich-content-editor-common';
import { getDefaultToolbarSettings } from './default-toolbar-settings';
import { mobileTextButtonList, desktopTextButtonList, pluginButtonNames } from './buttons';
import { reducePluginTextButtons } from './buttons/utils';
import { get } from 'lodash';

const createEditorToolbars = ({ buttons, textAlignment, refId, context, pluginButtonProps }) => {
  const { uiSettings = {}, getToolbarSettings = () => [] } = context.config;
  const { pluginButtons, pluginTextButtons } = buttons;

  const { isMobile, theme = {} } = context;

  const pubsub = simplePubsub();

  const textButtons = {
    mobile: mobileTextButtonList,
    desktop: desktopTextButtonList,
  };

  const pluginTextButtonMap = reducePluginTextButtons(pluginTextButtons);

  const defaultSettings = getDefaultToolbarSettings({
    pluginButtons,
    pluginButtonNames,
    textButtons,
    pluginTextButtons: pluginTextButtonMap,
    pluginButtonProps,
  });
  const customSettings = getToolbarSettings({
    pluginButtons,
    pluginButtonNames,
    textButtons,
    pluginTextButtons: pluginTextButtonMap,
    pluginButtonProps,
  });
  const toolbarSettings = mergeToolbarSettings({ defaultSettings, customSettings });
  const toolbars = {};
  const deviceName = !isMobile ? 'desktop' : isiOS() ? 'mobile.ios' : 'mobile.android';

  toolbarSettings
    .filter(({ name }) => name !== TOOLBARS.PLUGIN)
    .filter(({ shouldCreate }) => get(shouldCreate(), deviceName, true))
    .forEach(
      ({
        name,
        getButtons,
        getTextPluginButtons,
        getPositionOffset,
        getVisibilityFn,
        getInstance,
        getDisplayOptions,
        getToolbarDecorationFn,
        addPluginMenuConfig,
        footerToolbarConfig,
      }) => {
        toolbars[name] = getInstance({
          ...context,
          displayOptions: get(getDisplayOptions(), deviceName, {
            displayMode: DISPLAY_MODE.NORMAL,
          }),
          toolbarDecorationFn: get(getToolbarDecorationFn(), deviceName, () => null),
          textPluginButtons: get(getTextPluginButtons(), deviceName, []),
          offset: get(getPositionOffset(), deviceName, { x: 0, y: 0 }),
          visibilityFn: get(getVisibilityFn(), deviceName, () => true),
          buttons: get(getButtons(), deviceName, []),
          theme: { ...getToolbarTheme(theme, name.toLowerCase()), ...theme },
          defaultTextAlignment: textAlignment,
          pluginButtons,
          uiSettings,
          pubsub,
          refId,
          addPluginMenuConfig,
          footerToolbarConfig,
        });
      }
    );

  return toolbars;
};

export default createEditorToolbars;