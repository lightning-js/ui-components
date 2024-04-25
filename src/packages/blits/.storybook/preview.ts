import Blits from '@lightningjs/blits';
import type { Preview } from '@storybook/html';


const launchApp = ([componentName, componentFn, componentTemplate]) => {

// app with single component
const App = Blits.Application({
  components: {
    [componentName]: componentFn
  },
  template: componentTemplate,
})

// timeout to wait until app div is available
setTimeout(() => {
  Blits.Launch(App, 'app', {
    w: 1920,
    h: 1080,
    multithreaded: false,
    debugLevel: 1,
    fonts: [
      {
        family: 'opensans',
        type: 'web',
        file: 'fonts/OpenSans-Medium.ttf',
      },
    ],
  })
}, 0)

}


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [(Story) => `<div id='app' style='background-color:black'></div><script>${launchApp(Story())}</script>`]
};

export default preview;
