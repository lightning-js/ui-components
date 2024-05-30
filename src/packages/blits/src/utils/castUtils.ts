export const UnrequiredString = (v: unknown): string | undefined => {
  if (!!!v) return undefined;
  return v.toString();
};

export const UnrequiredNumber = (v: unknown): number | undefined => {
  if (!!!v) return undefined;
  if (typeof v === 'number' && isFinite(v)) return v;
  if (typeof v === 'string' && isFinite(parseFloat(v))) return parseFloat(v);
  throw new Error(`Invalid number '${v}' passed`);
};
