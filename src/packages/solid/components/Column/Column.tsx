import { type Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles.js';
import { withScrolling } from '../../utils/withScrolling.js';

export interface ColumnProps extends IntrinsicNodeProps {
  /** Item index at which scrolling begins */
  scrollInde?: number;
  scrollType?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll';
}

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  return (
    <SolidColumn
      {...props}
      animate
      clipping
      style={styles.Column}
      onSelectedChanged={withScrolling(props.y as number)}
    />
  );
};

export default Column;
