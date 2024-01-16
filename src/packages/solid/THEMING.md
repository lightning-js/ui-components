# Theming in solid-ui

## What is theming?

Theming allows a user to provide styles to the components in this UI library. This section is mostly for developers making components to leverage themes along with solid-ui components, or those who are simply curious about how this system functions.

## App Setup

(See the README for the full solid-ui setup)

Themes are loaded at compile time by the app bundler(we recommend [vite](https://vitejs.dev/) which is built on top of [rollup](https://rollupjs.org/)). In your bundler config, you'll need add an import alias.

_the app will not run without this configuration_

in vite for example:

```js
  resolve: {
    alias: {
      theme: path.resolve(__dirname, 'path/to/your/theme.js'),
    }
  },
```

## Component Setup

Each themeable element in the Component will need the properties below. The `style` assignment provides the base component styles, the `tone` gets mapped to states via the `toneStateMapperHook`(more on that below), and the object merge beneath that ensures that any instance-level styles provided override the tone.

```jsx
<View
  style={styles.Container}
  tone={props.tone || styles.tone}
  {...{
    ...styles.Container[props.tone || styles.tone],
    ...props?.style?.Container
  }}
/>
```

### Theme File

Contains values which can be referenced via `theme.property.path` in the style file(more on that below), and component configs which is how we create theme-level component styles.

One config could look something like this:

```js
{
  componentConfig: {
    ComponentName: {
      base: {
        // base style overrides
        color: 'red'
      },
      focus: {
        // focus specific styles
        color: 'purple'
      },
      // ...any other tone mode style overrides
    }
  }
}
```

### Style Files

returns an object containing each component element's styles, and the tone.
something like

```js
{
  tone: 'neutral',
  Container: containerStyles,
  Text: textStyles
}
```

Each style file contains a config which will get passed to `makeComponentStyles` and has the following properties:

- `themeKeys`
  - informs which values we should expect a given componentConfig to contain, and the solid style props to which those keys map
- `base`
  - the default styles of a component
- `toneModes`
  - style overrides that'll get applied to a component based on it's states(which will represent tones, modes, and toneModes)
- `themeStyles`
  - these come in from the theme, the setup looks the same for each component
- `toneModeFallbackMap`(optional)
  - defines which mode/tone each tone/mode should fall back to. a default exists, this is only necessary for component-level map overrides

### Tones and Modes

Tones, Modes, and ToneModes are defined either in the component style file or the theme's component config.

- tones - overrides to a component's default styles
  - usually an alternate color pallette
- modes - styles that are applied during the component lifecycle, can be thought of as states(focus, disabled, etc)
- toneModes - variations on mode styles that are applied when a component with a specific tone receives that mode
  - ie. when a Button with tone "brand" receives the mode "focus", the styles defined in `brand-focus` would be applied

#### Tones and Modes in Solid(toneStateMapperHook)

tones are specific to solid-ui and not part of the lightningjs/solid framework, so we need to add them on. in the app's index(or wherever you're rendering your solid canvas), import the `mapToneToStateHook` method and assign it to the lightningjs/solid config object

```js
import { render, Canvas, Config } from '@lightningjs/solid';
import { mapToneToStateHook } from '@lightningjs/solid-ui';
Config.stateMapperHook = mapToneToStateHook;

render(() => <Canvas />);
```

this merges the component's tone with it's current state, ensuring we assign the correct toneMode values.
