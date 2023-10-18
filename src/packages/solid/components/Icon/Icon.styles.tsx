import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type IconStyle = {
  container: {
    color: number,
    width: number,
    height: number,
    fixed: boolean
  }
};

const styles: IconStyle = {
  container: {
    color: getHexColor(...(theme.color.fillInverse as [string, number])),
    width: 100,
    height: 100,
    fixed: true
  }
};

export default styles;
