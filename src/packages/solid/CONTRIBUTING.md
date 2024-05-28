# Contributor Guidelines

We welcome contributions to this project! If this is your first time working in this repository, we recommend you reach out to our team first in the #lightning3 channel in the lightning discord server.

Pull Requests to this repository should consist of clean, well-formatted code. Commit messages should follow conventional commit formatting and include a relevant commit type and scope with the commit message. Pull Requests require 2 approvals to merge, one of which should come from a Code Owner in GitHub.

In addition, our CI tests enforce a specific subset of conventional commit message formatting for PR titles (with the assumption that PRs will be squash-merged): the scope must be one of feat,fix,chore,docs,test, or build; and the scope may only contain alpha characters (no numbers or punctuation).

## Structure of this package

this section refers specifically to src/packages/solid. For the full project structure, checkout the [ui-components README](README.md)

directory structure:

- .storybook - storybook related files and configs
- assets - images, generally used by story files
- components - component files
- templates - starter files used to create components
- types - shared types
- utils - shared utils

## Component files

parts of a component:

- Component.tsx - all component code, one component per file
- Component.styles.ts - component styles, broken down by node
- Component.types.ts - all component types and interfaces
- Component.stories.tsx - component examples for storybook

### Component.tsx

one component per file, complex calculations should be isolated to functions.

check out the [Custom Component section](https://lightning-js.github.io/solid/#/components?id=custom-components) of the lightning3/solid docs for in depth information on component authoring.

### Component.styles.ts

### Component.types.ts

### Component.stories.tsx

### Authoring a component

start by copying the component template files from the templates directory. Rename each of these files(replace <ComponentName> with the new component's name ie. Button):

- component.template -> <ComponentName>.tsx
- styles.template -> <ComponentName>.styles.ts
- types.template -> <ComponentName>.types.ts
