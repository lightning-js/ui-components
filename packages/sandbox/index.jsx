import { render, Canvas, Config } from '@lightningjs/solid';
import { Router } from '@solidjs/router';
import App from './pages/App';
import coreExtensionModuleUrl from '../core/AppCoreExtensions.js?importChunkUrl';
import coreWorkerUrl from '../core/threadx-core-worker.js?importChunkUrl';

Config.debug = true;
Config.fontSettings.fontFamily = 'Ubuntu';
Config.fontSettings.color = 0xffffffff;

const driver = 'main';
const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: driver === 'threadx' ? coreWorkerUrl : undefined
  // deviceLogicalPixelRatio: 1
};

render(() => (
  <Canvas options={RenderOptions}>
    <Router>
      <App />
    </Router>
  </Canvas>
));
