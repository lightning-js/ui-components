import theme from 'theme';

export const themeColumnWidth = 1920 - theme.layout.marginX * 2;

export const getRowHeight = (itemLayout: { upCount: number; ratioX: number; ratioY: number }) =>
  ((themeColumnWidth - (itemLayout.upCount - 1 * theme.layout.gutterX)) /
    itemLayout.upCount /
    itemLayout.ratioX) *
  itemLayout.ratioY;
