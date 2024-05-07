import type {Tone, States, JustifyContent, Align} from "../types/types";

// generic type guard - returns whether input is included in a given array
export function isType<Type>(v: unknown, typeValues: readonly unknown[]): v is Type {
  return typeValues.includes(v);
}

// type guards for Tone/States/JustifyContent
export const ToneValues = ['neutral', 'inverse', 'brand'] as const;
export function isValidTone(v: unknown): v is Tone {
  return typeof v === 'string' && ToneValues.includes(v as Tone);
}

export const StatesValues = ['focus', 'unfocused', 'disabled'] as const;
export function isValidState(v: unknown): v is States {
  return typeof v === 'string' && StatesValues.includes(v as States);
}

export const JustifyContentValues = ['center', 'flexStart', 'flexEnd', 'spaceBetween', 'spaceEvenly'] as const;
export function isValidJustifyContent(v: unknown): v is JustifyContent {
  return typeof v === 'string' && JustifyContentValues.includes(v as JustifyContent);
}

// no flex in Blits yet so haven't integrated alignment but type is ready for when we need it
export const AlignValues = ['left', 'center', 'right'] as const;
export function isValidAlign(v: unknown): v is Align {
  return typeof v === 'string' && AlignValues.includes(v as Align);
}