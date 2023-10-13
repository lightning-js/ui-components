import theme from 'theme';

export const themeColumnWidth = 1920 - theme.layout.marginX * 2;

/**
 *
 * @param {Object} itemLayout
 * @param {number} itemLayout.upCount
 * @param {number} itemLayout.ratioX
 * @param {number} itemLayout.ratioY
 * @return {number}
 */
export const getRowHeight = (itemLayout: any) =>
  ((themeColumnWidth - (itemLayout.upCount - 1 * theme.layout.gutterX)) /
    itemLayout.upCount /
    itemLayout.ratioX) *
  itemLayout.ratioY;
