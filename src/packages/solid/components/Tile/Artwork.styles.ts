import theme from 'theme';
import { Color, StateStyle } from '../../../../shared/types/solid';
import { getHexColor } from 'utils';

type ArtworkStyle = {
  Container: {
    // animationBlurEntrance: object;
    // animationBlurExit: object;
    // animationComponentEntrance: object;
    // animationGradientEntrance: object;
    // animationGradientExit: object;
    // animationImageScaleEntrance: object;
    // animationImageScaleExit: object;
    blur: number;
    centerImageRadius: number;
    // fallbackSrc: string | undefined;
    fillColor: number;
    gradientColor: number;
    // imageScale: number | function;
    // imageScalePivotX: number;
    // imageScalePivotY: number;
    padding: number;
    borderRadius: number | number[];
    // zIndexSet: object;
  };
};

const styles: ArtworkStyle = {
  Container: {
    // animationBlurEntrance: theme.animation.utilityEntrance,
    // animationBlurExit: theme.animation.utilityExit,
    // animationComponentEntrance: theme.animation.utilityEntrance,
    // animationGradientEntrance: theme.animation.utilityEntrance,
    // animationGradientExit: theme.animation.utilityExit,
    // animationImageScaleEntrance: theme.animation.standardEntrance,
    // animationImageScaleExit: theme.animation.standardEntrance,
    blur: 4,
    centerImageRadius: theme.radius.md,
    // fallbackSrc: undefined,
    fillColor: getHexColor(...(theme.color.overlay as [string, number])),
    gradientColor: getHexColor(...(theme.color.material as [string, number])),
    // imageScale: undefined,
    // imageScalePivotX: 0.5,
    // imageScalePivotY: 0.5,
    padding: theme.spacer.md,
    borderRadius: theme.radius.md,
    // zIndexSet: {
    //   image: 1,
    //   blur: 2,
    //   centerImage: 3,
    //   fill: 4,
    //   gradient: 5,
    //   foreground: 6
    // }
  }
};

export default styles;
