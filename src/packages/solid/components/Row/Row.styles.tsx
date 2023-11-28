import theme from 'theme';

type RowStyle = {
  Row: {
    display: string;
    justifyContent: string;
    flexDirection: string;
    gap: number;
    x: number;
    y: number;
    width: number;
  };
};

const styles: RowStyle = {
  Row: {
    display: 'flex',
    justifyContent: 'flexStart',
    flexDirection: 'row',
    gap: 30,
    x: theme.layout.marginX,
    y: [200, { ...theme.animation.standard, duration: theme.animation.duration.fast }] as any,
    width: theme.layout.screenW
  }
};

export default styles;