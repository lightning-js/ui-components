import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type IconStyle = {
  container: {
    color: number,
    //fixed: boolean
  }
};

const styles: IconStyle = {
  container: {
    color: getHexColor(...(theme.color.fillInverse as [string, number])),
    //fixed: true
  }
};

export default styles;
