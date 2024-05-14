import { States, Tone } from '../types/types';

type StyleProps = { [_prop: string]: unknown } & { [state in States]?: { [_prop: string]: unknown } };

type Style = {
  base: StyleProps;
  tones?: {
    [tone in Tone]?: StyleProps;
  };
};

// prioritised by -> tone + state -> state -> tone -> base
export const getStyledProp = (
  prop: string,
  style: Style,
  tone: Tone = 'neutral',
  states: States = 'unfocused'
): unknown | null => {
  return (
    style.tones?.[tone]?.[states]?.[prop] ??
    style.base[states]?.[prop] ??
    style.tones?.[tone]?.[prop] ??
    style.base[prop]
  );
};
