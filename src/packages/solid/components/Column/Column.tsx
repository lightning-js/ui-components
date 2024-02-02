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
  function isFunc(OnSelectedChanged: unknown) {
    throw new Error('Function not implemented.');
  }

  return (
    <SolidColumn
      {...props}
      animate
      style={styles.Container}
      onSelectedChanged={
        typeof props.OnSelectedChanged === 'function' &&
        props.OnSelectedChanged.call(this) &&
        withScrolling(props.y as number)
      }
    />
  );
};

export default Column;
