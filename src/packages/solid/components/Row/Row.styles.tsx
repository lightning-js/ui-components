import theme from 'theme';

const styles = {
  Row: {
    display: 'flex',
    justifyContent: 'flexStart',
    flexDirection: 'row',
    gap: 30,
    x: theme.layout.marginX,
    y: [200, { ...theme.animation.standard, duration: theme.animation.duration.fast }] as any,
    width: theme.layout.screenW
  }
} as const;

export default styles;
