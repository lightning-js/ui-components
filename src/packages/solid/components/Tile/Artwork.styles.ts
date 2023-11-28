import theme from 'theme';
import { Color, StateStyle } from '../../../../shared/types/solid';
import { getHexColor } from 'utils';

type ArtworkStyle = {
  Container: {
    fallbackSrc: string | undefined;
    fillColor: number;
    gradientColor: number;
    imageScale: number | undefined;
    imageScalePivotX: number;
    imageScalePivotY: number;
    padding: number;
    borderRadius: number | number[];
    zIndexSet: object;
  };
};

const styles: ArtworkStyle = {
  Container: {
    fallbackSrc: undefined,
    fillColor: getHexColor(...(theme.color.overlay as [string, number])),
    gradientColor: getHexColor(...(theme.color.material as [string, number])),
    imageScale: undefined,
    imageScalePivotX: 0.5,
    imageScalePivotY: 0.5,
    padding: theme.spacer.md,
    borderRadius: theme.radius.md,
    zIndexSet: {
      image: 1,
      blur: 2,
      centerImage: 3,
      fill: 4,
      gradient: 5,
      foreground: 6
    }
  }
};

export default styles;
