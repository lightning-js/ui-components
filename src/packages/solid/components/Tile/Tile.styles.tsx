import theme from 'theme';

type TileStyle = {
  width: number;
  height: number;
  paddingX: number;
  paddingY: number;
  paddingYProgress: number;
  paddingYBetweenContent: number;
  borderRadius: number;
  alpha: number;
  shade: object;
};

const styles: TileStyle = {
  width: 400,
  height: 240,
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.lg,
  paddingYProgress: theme.spacer.xl,
  paddingYBetweenContent: theme.spacer.md,
  borderRadius: theme.radius.sm,
  alpha: theme.alpha.primary,
  shade: {
    color: '#000000',
    alpha: 0,
    focus: {
      // alpha: 0.5,
      alpha: [0.5, { duration: 100, easing: 'ease-out' }]
    }
  }
};

export default styles;
