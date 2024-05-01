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

  // observer waits until app element is found before launching blits app
  const observer = new MutationObserver((mutationList, observer) => {
    const appElement = document.getElementById('app');

    if (appElement) {
      observer.disconnect();

      Blits.Launch(App, 'app', {
        w: 1920,
        h: 1080,
        multithreaded: false,
        debugLevel: 1,
        inspector: true
      })
    }
  });

  // start observing root until app element is initialised
  observer.observe(document, {
    subtree: true,
    childList: true
  });

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
