import { type Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles.js';
import { withScrolling } from '../../utils/withScrolling.js';

export interface ColumnProps extends IntrinsicNodeProps {
  /** Item index at which scrolling begins */
  scrollIndex?: number;
  scrollType?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll';
}

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  return (
    <SolidColumn
      {...props}
      style={styles.Container}
      onSelectedChanged={
        withScrolling(props.y as number) &&
        typeof props.OnSelectedChanged === 'function' &&
        props.OnSelectedChanged.call(this)
      }
    />
  );
};

export default Column;
