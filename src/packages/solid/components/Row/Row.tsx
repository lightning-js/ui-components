import { Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import { Row as SolidRow } from '@lightningjs/solid-primitives';
import styles from './Row.styles';
import { withScrolling } from '../../withScrolling';
withScrolling;

export interface RowProps extends IntrinsicNodeProps {
  /**
   * components to be listed in the Row
   */
  children: object;
  /** Item index at which scrolling begins */
  scrollIndex?: number;

  scrollType?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll' | undefined;
}

const Row: Component<RowProps> = (props: RowProps) => {
  let RowRef;
  const gap = styles.Row.gap;

  return (
    <SolidRow
      {...props}
      animate
      autofocus
      clipping
      style={styles.Row}
      height={500}
      ref={RowRef}
      onSelectedChanged={withScrolling(RowRef, ['row', props, gap])}
    />
  );
};

export default Row;
