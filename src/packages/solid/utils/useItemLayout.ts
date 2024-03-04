import theme from 'theme';

export interface ItemLayout {
  upCount: number;
  ratioX: number;
  ratioY: number;
}

// TODO theme may need to be a parameter
export const useItemLayout = (
  itemLayout: ItemLayout
): { width: number; height: number } | Record<string, never> => {
  if (itemLayout) {
    const width =
      (theme.layout.screenW - theme.layout.marginX * 2) / itemLayout.upCount - theme.layout.gutterX;

    const height = (width / itemLayout.ratioX) * itemLayout.ratioY;

    return { width, height };
  }
  return {};
};
