import theme from 'theme';

// TODO theme may need to be a parameter
export const useItemLayout = (itemLayout: {
  upCount: number;
  ratioX: number;
  ratioY: number;
}): { width: number; height: number } | Record<string, never> => {
  if (itemLayout) {
    const width =
      (theme.layout.screenW - theme.layout.marginX * 2) / itemLayout.upCount - theme.layout.gutterX;

    const height = (width / itemLayout.ratioX) * itemLayout.ratioY;

    return { width, height };
  }
  return {};
};
