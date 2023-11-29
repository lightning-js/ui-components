import type { ElementNode } from '@lightningjs/solid';

export default (node: ElementNode, states: ElementNode['States']) => {
  const nextState = node.tone
    ? states.map((state: string | { string: boolean }) => {
        if (state === node.tone) {
          return state; // don't create tone-tone states
        } else {
          return `${node.tone}-${state}`;
        }
      })
    : states;
  console.log(nextState);
  return nextState;
};
