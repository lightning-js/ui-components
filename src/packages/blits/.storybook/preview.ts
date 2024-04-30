import Blits from '@lightningjs/blits';
import type { Preview } from '@storybook/html';


const launchApp = ({name, fn, template}) => {

// app with single component
const App = Blits.Application({
  components: {
    [name]: fn
  },
  template,
})

// timeout to wait until app div is available
setTimeout(() => {
  Blits.Launch(App, 'app', {
    w: 1920,
    h: 1080,
    multithreaded: false,
    debugLevel: 1,
    inspector: true
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
    },
    backgrounds: {
      default: 'dark'
    }
  },
  //@ts-ignore
  decorators: [(Story) => `<div id='app'></div><script>${launchApp(Story())}</script>`]
};

export default preview;
