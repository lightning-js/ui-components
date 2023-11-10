import theme from 'theme';

type TileStyle = {
  Container: {
    width: number;
    height: number;
    padding: number[];
    paddingYProgress: number;
    paddingYBetweenContent: number;
    borderRadius: number;
  };
  FlexContainer: {
    width: number;
    height: number;
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
  LogoContainer: {
    width: theme.spacer.lg * 5,
    height: theme.spacer.xxl + theme.spacer.md
  }
};

export default styles;
