import { getWidthByUpCount } from './getWidthByUpcount.js';

export function getItemRatioDimensions(theme, ratioX, ratioY, upCount) {
  let w, h;

  if (ratioX && ratioY && upCount) {
    w = Math.round(getWidthByUpCount(theme, upCount) ?? 0);
    h = Math.round((w / ratioX) * ratioY);
  } else {
    w = 0;
    h = 0;
  }
  return { w, h };
}
