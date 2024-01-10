import type { ElementNode } from '@lightningjs/solid';

// TODO update states to use ElementNode['States'] when support is added
export default (node: ElementNode, states: { string: boolean }[]) => {
  const nextState = node.tone
    ? states.map((state: string | { string: boolean }) => {
        if (state === node.tone) {
          return state; // don't create tone-tone states
        } else {
          return `${node.tone}-${state}`;
        }
      })
    : states;
  return nextState;
};
