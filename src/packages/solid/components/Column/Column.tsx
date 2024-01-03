import { Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles';
import { withScrolling } from '../../withScrolling';
withScrolling;

export interface ColumnProps extends IntrinsicNodeProps {
  /**
   * components to be listed in the column
   */
  children: object;

  /** Item index at which scrolling begins */
  scrollIndex: number;

  scrollType?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll' | undefined;
}

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  let ColumnRef;
  const gap = styles.Column.gap;

  return (
    <SolidColumn
      {...props}
      animate
      style={styles.Column}
      clipping
      ref={ColumnRef}
      onSelectedChanged={withScrolling(['column', props, gap])}
    />
  );
};

export default Column;
