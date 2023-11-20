import theme from 'theme';
import { ContentAlign } from '../../../../shared/types/solid';

type TileStyle = {
  Container: {
    width: number;
    height: number;
    padding: number[];
    paddingYProgress: number;
    paddingYBetweenContent: number;
    borderRadius: number;
  };
  metaContainer: {
    display: 'flex';
    mountY: number;
    flexDirection: 'column' | 'row';
    justifyContent: ContentAlign;
  };
  LogoContainer: {
    width: number;
    height: number;
  };
};

const styles: TileStyle = {
  Container: {
    width: 400,
    height: 240,
    padding: [40, 10],
    paddingYProgress: theme.spacer.xl,
    paddingYBetweenContent: theme.spacer.md,
    borderRadius: theme.radius.md
  },
  metaContainer: {
    display: 'flex',
    mountY: 1,
    flexDirection: 'column',
    justifyContent: 'flexEnd'
  },
  LogoContainer: {
    width: theme.spacer.lg * 5,
    height: theme.spacer.xxl + theme.spacer.md
  }
};

export default styles;
