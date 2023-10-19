import theme from 'theme';

export const useItemLayout = (itemLayout: { upCount: number; ratioX: number; ratioY: number }) => {
  if (itemLayout) {
    const width =
      (theme.layout.screenW - theme.layout.marginX * 2) / itemLayout.upCount - theme.layout.gutterX;

    const height = (width / itemLayout.ratioX) * itemLayout.ratioY;

    return { width, height };
  }
  return {};
};
