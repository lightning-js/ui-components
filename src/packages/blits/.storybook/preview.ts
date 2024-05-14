import Blits from '@lightningjs/blits';
import type { Preview } from '@storybook/html';

const launchApp = ({name, fn, args}) => {

  // generate blits string with args attached
  const template = `<${name}
  ${Object.entries(args)
    .filter(([_k, v]) => v !== undefined)
    .map(([k]) => `${k}="$${k}"`)
    .join(' ')} ref="component" />`

  // app with single component
  const App = Blits.Application({
    components: {
      [name]: fn
    },
    state() {
      return args
    },
    hooks: {
      // always pass focus to component
      focus() {
        const component = this.select('component');
        if (component && component.focus) component.focus();
      }
    },
    template
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
  //@ts-expect-error custom decorator uses differently typed Story
  decorators: [(Story) => `<div id='app'></div><script>${launchApp(Story())}</script>`]
};

export default preview;
