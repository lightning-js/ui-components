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
  let ColumnRef, ContainerRef;
  const gap = styles.Column.gap;


  return (
    <node autofocus use:withScrolling={['column', props, gap]} {...props} ref={ContainerRef}>
      <SolidColumn {...props} animate style={styles.Column} width={400} height={500} ref={ColumnRef}>
        {props.children}
      </SolidColumn>
    </node>
  );
};

export default Column;
