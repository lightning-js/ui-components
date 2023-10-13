export function getHexColor(hex: number | string, alpha = 1) {
  if (!hex) {
    return 0x00;
  }

  if (typeof hex === 'number') {
    hex = hex.toString(16).slice(2);
  }

  hex = hex.replace('#', '');

  const hexAlpha = Math.round(alpha * 255).toString(16);
  const str = `0x${hex}${hexAlpha}`;
  return Number(str);
}
