import theme from 'theme';

export const styles = {
  Container: {
    height: theme.spacer.md * 9,
    minWidth: theme.spacer.md * 7,
    paddingX: theme.spacer.md,
    textStyle: theme.typography.headline2,
    borderRadius: 10,//theme.radius.sm, // this doesnt work, only takes button
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    baseWidth: theme.spacer.md * 7,
    iconWidth: theme.typography.headline2.lineHeight,
    iconHeight: theme.typography.headline2.lineHeight
  }
} as const;

export default styles;
