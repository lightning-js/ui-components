import theme from 'theme';

/**
 * @typedef {Object} Dimensions
 * @property {number} width
 * @property {number} height
 */

/**
 * @param {Object} itemLayout
 * @param {number} itemLayout.upCount
 * @param {number} itemLayout.ratioX
 * @param {number} itemLayout.ratioY
 * @return {Dimensions}
 */
export const useItemLayout = itemLayout => {
  if (itemLayout) {
    const width =
      (theme.layout.screenW - theme.layout.marginX * 2) / itemLayout.upCount -
      theme.layout.gutterX;

    const height = (width / itemLayout.ratioX) * itemLayout.ratioY;

    return { width, height };
  }
  return {};
};
