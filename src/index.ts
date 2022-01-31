import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_minimal extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_minimal:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_minimal is activated!');
    const style = 'jupyterlab_minimal/index.css';

    manager.register({
      name: 'jupyterlab_minimal',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
