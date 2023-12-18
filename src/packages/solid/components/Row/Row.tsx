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
  let RowRef, ContainerRef;
  const gap = styles.Row.gap;

  return (
    <node autofocus use:withScrolling={['row', props, gap]} {...props} ref={ContainerRef}>
      <SolidRow {...props} animate style={styles.Row} width={800} height={500} ref={RowRef}>
        {props.children}
      </SolidRow>
    </node>
  );
};

export default Row;
