import Blits from '@lightningjs/blits';

export type FlexRect = {
  w?: number;
  h?: number;
  x?: number;
  y?: number;
};

// extended ComponentInstance that returns width and height
export interface FlexComponentInstance extends Blits.Component.ComponentInstance {
  width(): number;
  height(): number;
}

// get rects for all components with a given reference and up to a count - optional gap applied between components
export const getFlexRects = (
  parent: Blits.Component.ComponentInstance,
  ref: string,
  count: number,
  gap: number = 0
): FlexRect[] => {
  const rects: FlexRect[] = [];
  for (let i = 0; i < count; i++) {
    const component = parent.select(`${ref}${i}`) as FlexComponentInstance;
    if (!component || !component.width || !component.height) break;
    rects.push({
      w: component?.width() ?? 0,
      h: component?.height() ?? 0,
      x: i === 0 ? 0 : (rects[i - 1].x ?? 0) + (rects[i - 1].w ?? 0) + gap
    });
  }
  return rects;
};

export const getMaxHeight = (rects: FlexRect[]): number => {
  return rects.reduce((acc, cur) => Math.max(acc, cur.h ?? 0), 0);
};
