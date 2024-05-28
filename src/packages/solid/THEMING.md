# Theming in solid-ui

## What is theming?

Theming allows a user to provide styles to the components in this UI library. This section is mostly for developers making components to leverage themes along with solid-ui components, or those who are simply curious about how this system functions.

## App Setup

(See the README for the full solid-ui setup)

Themes are loaded at compile time by the app bundler (we recommend [vite](https://vitejs.dev/) which is built on top of [rollup](https://rollupjs.org/)). In your bundler config, you'll need add an import alias.

_the app will not run without this configuration_

in vite for example:

```JS
// vite.config.js
  resolve: {
    alias: {
      theme: '@lightningjs/l3-ui-theme-base',
    }
  },
```

or if you have your own local theme:

```JS
  resolve: {
    alias: {
      theme: path.resolve(__dirname, 'path/to/your/theme.js'),
    }
  },
```

## Component Setup

Each themeable element in the Component will accept some variation of the below style array. They're merged by solid where the lowest index holds the highest priority, this ensures that the element's `base` styles are the lowest priority, overridden by tone-specific values, which are in turn overridden by inline style values.

```JSX
<View
  style={[
    props.style, //
    styles.Container.tones[props.tone || styles.tone],
    styles.Container.base
  ]}
/>
```

### Theme File

Themes contain values which can be referenced via `theme.property.path` in the style file (more on that below), and component configs which is how we create theme-level component styles.

One config could look something like this:

```JS
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

Style files contain a style config and return an object containing each of the component's element's styles, and the tone.
something like

```JS
{
  tone: 'neutral',
  Container: containerStyles,
  Text: textStyles
}
```

Each style file contains a config or configs(usually one config per element) which will get passed to `makeComponentStyles` and has the following properties:

- `themeKeys`
  - informs which values we should expect a given componentConfig to contain, and the solid style prop to which each key maps
- `base`
  - the default(unfocused) styles of a component
- `themeStyles`
  - styles defined per component in the theme, the setup looks the same for each component
- `modes` (optional)
  - style overrides that get applied to a component based on it's state
- `tones` (optional)
  - style overrides that are handled in the style property array
- `modeKeys` (optional)
  - modes supported by a component, defaults to ['focus', 'disabled']
- `toneKeys` (optional)
  - tones supported by a component, defaults to ['neutral', 'inverse', 'brand']

#### Tones

Components support two main ways of configuring component variants: Tones and Modes. Tones describe built-in visual variants of a component. Each solid component supports three tones:

- neutral (the default appearance, using neutral colors)
- inverse (for providing contrast when using neutral colors against an opposite color background)
- brand (meant to call branded focus to an element)

For each component in the componentConfig definition, you can specify a different default tone for that component by defining the tone property as a string of one of the three tone values: neutral, inverse, or brand. This will cause that given component to render in that tone by default without requiring a user to explicitly specify the tone on each instance.

For example:

```JS
componentConfig: {
  ProgressBar: {
    tone: 'brand'
  }
}
```

### Tones and Modes

Tones and Modes give us a uniform way to define alternate styles for a component. They're defined either in the component style file or the component's entry in a theme's component config.

While tones provide overrides to a component's default styles

- usually an alternate color pallette
- modes - styles that are applied during the component lifecycle, can be thought of as states (focus, disabled, etc)

Tones and Modes are applied to a component somewhat differently:

Tones are applied to a element as part of the style array:

```JSX
<View style={[styles.tones[props.tone], styles.base]} />
```

Thanks to how solid processes the style property, we can optionally include `tone` styles if they exist in the component's styles. In the above example if `styles.tones[tone]` is undefined, it's ignored by the framework and nothing gets applied. The `tone` is expected to be static and provides a way for us to have multiple unfocused styles for a given component.

tones may have their own mode overrides nested within their config ie. the following:

```JS
{
  tones: {
    brand: {
      focus: {}
    }
  }
}
```

will be applied when the component's tone='brand' and state='focus'
