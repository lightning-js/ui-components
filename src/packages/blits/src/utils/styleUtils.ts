import { States, Tone } from '../types/types';

type BaseStyle = {
  [_prop: string]: unknown;
} & {
  [state in States]?: {
    [_prop: string]: unknown;
  };
};

type ToneStyle = {
  [tone in Tone]?: BaseStyle;
};

type ElementStyle = {
  base: BaseStyle;
  tones?: ToneStyle;
};

export type ComponentStyle = {
  [_element: string]: ElementStyle;
};

// search object for deep property (e.g. object.foo.bar)
const deepSearch = (obj: unknown, keys: string[]): unknown | null => {
  let value: unknown | null = null;
  keys.find(key => {
    if (!obj || typeof obj !== 'object') return true;
    value = obj[key as keyof typeof obj];
    if (!value) return true;
    obj = value;
    return false;
  });
  return value;
};

// prioritised by -> tone + state -> state -> tone -> base
export const getStyledProp = (
  prop: string,
  style: ElementStyle,
  tone: Tone = 'neutral',
  states: States = 'unfocused'
): unknown | null => {
  let value: unknown;
  [style.tones?.[tone]?.[states], style.base[states], style.tones?.[tone], style.base].find(object => {
    if (!object) return false;
    value = deepSearch(object, prop.split('.'));
    return !!value;
  });
  return value;
};
