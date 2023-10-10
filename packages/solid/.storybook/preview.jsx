import { Canvas } from '@lightningjs/solid';
import coreExtensionModuleUrl from '../../shared/AppCoreExtensions.js?importChunkUrl';

const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: undefined,
  rootId: 'storybook-root'
  // deviceLogicalPixelRatio: 1
};

// global args
export const argTypes = {
  width: {
    description: 'the width of the component'
  }
};
export const args = {
  width: 300
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    Story => (
      <Canvas options={RenderOptions}>
        <Story />
      </Canvas>
    )
  ]
};

export default preview;
