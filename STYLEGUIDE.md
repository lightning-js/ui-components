# SolidJS

## Component directory

Each component folder must contain the following:

```
ComponentName
  - index.ts
  - ComponentName.tsx
  - ComponentName.styles.ts
  - ComponentName.stories.tsx
```

It may also contain other child components relevant to the main component.

## index.ts

The component, style file, and relevant types must be exported from this entry point

## ComponentName.tsx

Each component file must contain exactly one component function. If a component grows in complexity to a point where it should be split into multiple functions, child components must be moved to their own file.

## ComponentName.Styles.ts

Style objects should include a key for each child component in the object root, with each child component's styles scoped to that key. the key should be a capital letter to signify that it is a Component and not a style or state.

ex.

```javascript
styles = {
  Container: {
    alpha,
    borderRadius,
    color,
    display
  },
  Text: {
    alpha,
    borderRadius,
    color,
    display
  }
};
```
