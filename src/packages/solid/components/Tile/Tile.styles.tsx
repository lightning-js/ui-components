import theme from 'theme';

const styles = {
  Container: {
    width: 400,
    height: 240,
    padding: [40, 10],
    paddingYProgress: theme.spacer.xl,
    paddingYBetweenContent: theme.spacer.md,
    borderRadius: theme.radius.md,
    alpha: theme.alpha.primary,
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  insetBottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    mountY: 1
  },
  standardBottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart'
  },
  LogoContainer: {
    width: theme.spacer.lg * 5,
    height: theme.spacer.xxl + theme.spacer.md
  }
} as const;

export default styles;
