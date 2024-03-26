# Themes

what are they

## Sections of a theme

A theme is made up of the following sections:

- Foundational tokens
  - alpha
  - animation
  - color
  - fonts (font files)
  - layout (margins, gutters, column counts)
  - radius
  - spacer (padding)
  - stroke
  - typography (text styles)
- Component config (component-specific styles)
- Extensions (functional additions to components)
- Platform-specific values (e.g. global CSS for web)

### Foundational tokens

Theme files contain tokens describing the design decisions specific to that theme. These are high-level things like corner radius values, color palettes, and typography styles. These tokens are global in scope and used by all of the components.

For example, there may be a radius.md token which represents the value of a medium corner radius, and used by a range of components including buttons, cards, and tiles.

### Component config

Themes may also contain a set of component-specific styles. Unlike the global foundations, these styles are specific to a single component and not shared. These styles are an important tool for allowing the flexibility and nuance needed to support a wide range of design systems.

For example, a component config might contain tokens specifically for a Button's radius property. This might normally use the radius.md property, but setting the Button's radius directly allows a user to change only the appearance of the button without affecting any other components that might use that same global radius.md token.

The componentConfig section of a theme file is an object whose keys are the names of components in PascalCase (aka ClassCase). The values of this componentConfig object are style objects, described in more detail below.

```TS
componentConfig: Object {
  [ComponentName: string]: Object {
    tone?: 'neutral' | 'inverse' | 'base';
    mode?: 'unfocused' | 'focused' | 'disabled' | 'selected' | 'pressed';
    style?: Object {
      [componentProperty?: string]: any;
      tone?: Object {
        [componentProperty?: string]: any;
        mode?: Object {
          [componentProperty?: string]: any;
        }
      }
      mode?: Object {
        [componentProperty?: string]: any;
      }
    }
  }
}
```

#### Tones

SUITE themes have two main ways of categorizing component variants, which are referred to as Tones and Modes. Tones describe built-in visual variants of a component. Each SUITE component supports three tones:

- neutral (the default appearance, using neutral colors)
- inverse (for providing contrast when using neutral colors against an opposite color background)
- brand (meant to call branded focus to an element)

For each component in the componentConfig definition, you can specify a different default tone for that component by defining the tone property as a string of one of the three tone values: neutral, inverse, or brand. This will cause that given component to render in that tone by default without requiring a user to explicitly specify the tone on each instance.

For example:

```JS
componentConfig: {
  ProgressBar: {
    tone: 'brand';
  }
}
```

#### Modes

The other way of categorizing component variants in SUITE themes is called Modes, which describe the interactive state of a component. SUITE themes and SUITE-compatible component libraries support a range of modes, though not all modes are supported on all platforms (such as hovered on TV, where that interaction pattern isn't relevant). The modes include:

unfocused (the default state of a component)
focused (when the component is actively being interacted with)
disabled (when a user should not be able to interact with a component)
selected (used to highlight without conveying active focus, such as the selected tab or menu item in a list)
hovered (a specific type of interaction involving a cursor, sometimes but not always treated the same as focused)
pressed (when a component is mid-interaction, such as a button being clicked)
For each component in the componentConfig definition, you can specify a different default interactive state for that component by defining the mode property as a string of one of the different mode values: unfocused, focused, disabled, selected, hovered, pressed

⚠️ This functionality is not commonly used and not all SUITE-compatible component libraries support setting a default mode other than unfocused.

For example:

```JS
componentConfig: {
  ProgressBar: {
    mode: 'disabled';
  }
}
```

#### Style config

Beyond just setting new defaults for tone and mode, the component config object can be used to define component-specific styles in a targeted way—allowing users to re-skin specific components without worrying about the effect on other components' appearances.

For each component in the componentConfig object, you can include a style object which contains overrides for that component's default appearance. Each theme property of a component can be defined in the style object, and that value will be used for all tones and modes of that component, in place of any of its defaults.

For example, this definition will set the foreground color of all progress bars to green:

```JS
componentConfig: {
  ProgressBar: {
    style: {
      progressColor: '#00ff00'
    }
  }
}
```

##### Tones and modes in the style object

In addition, the style object can also contain mode- and tone-specific values for that component. Any property that is a direct child of the style object will be applied to every mode and tone of the object—maybe desirable for values like type styles or corner radius values, but potentially less desirable for values like opacity or color.

The style object also supports tone and mode properties, with the value of each being a style object of its own that supports any of a component's theme properties. The values in these nested objects will only be applied to its relevant tone or mode.

For example, this definition will have the following effects:

All progress bars will have square corners (radius of 0)
Disabled progress bars for all tones will have an opacity of 25%
Brand-tone progress bars will be green, but neutral and inverse progress will retain their default colors

```JS
componentConfig: {
  ProgressBar: {
    radius: 0,
    style: {
      mode: {
        disabled: { alpha: 0.25 }
      },
      tone: {
        brand: { progressColor: '#00ff00' }
      }
    }
  }
}
```

##### Tones and modes in combination

In certain circumstances, you may need to set the style of a component for a specific combination of mode and tone, like adjusting the text color of an inverse button when it is disabled.

Within the mode or tone property of the style object, you may also specify one level deeper with the other variant.

For example, this configuration will set the brand-tone progress bar's color to green for most modes, or else to a darker green when the component is disabled:

```JS
componentConfig: {
  ProgressBar: {
    style: {
      tone: {
        brand: {
          progressColor: '#00ff00',
          mode: {
            disabled: { progressColor: '#003300' }
          },
        }
      }
    }
  }
}
```

When setting these combinations, it is recommended to include mode-specific behavior inside of the tone definition.

For legacy reasons, it is technically possible to include these rules in either order (i.e. mode inside tone, or tone inside mode). However, mixing the two leads to readability issues and possible confusion, as in cases where a component property is present in both sections (i.e. brand-focused and focused-brand). In this case, the mode-specific tone definitions always trump tone-specific mode definitions. (In the previous example, focused-brand). Put another way, interaction states always win.

what do they need

what can they contain

best practices
