import { Component, createEffect, on } from 'solid-js';
import { View, activeElement, type IntrinsicNodeProps } from '@lightningjs/solid';
import { Row as SolidRow } from '@lightningjs/solid-primitives';
import styles from './Row.styles';
import { getScrollValue } from 'utils';
import { withScrolling } from '../../../../shared/utils/withScrolling';
import theme from 'theme';

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
  const gap = styles.gap;

  return (
    <View autofocus use:withScrolling={['row', props, gap]} {...props} ref={ContainerRef}>
      <SolidRow {...props} animate style={styles.Row} width={800} height={500} ref={RowRef}>
        {props.children}
      </SolidRow>
    </View>
  );
};

export default Row;
