import { Component, createEffect, on } from 'solid-js';
import { View, activeElement, type IntrinsicNodeProps } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles';
import { getScrollValue } from 'utils';

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
  let ColumnRef, ContainerRef, prevIndex, nextY, direction;

  createEffect(
    on(
      activeElement,
      elm => {
        if (ContainerRef === elm) {
          ColumnRef.children[ColumnRef.selected].setFocus();
        }
        if (ColumnRef.selected === prevIndex) {
          return;
        }
        prevIndex = ColumnRef.selected;
        const nextRow = ColumnRef.children[ColumnRef.selected];
        const nextY = -nextRow.y;
        // prevent repeat y updates
        if (ColumnRef.y !== nextY) {
          ColumnRef.y = nextY;
        }
      },
      { defer: true }
    )
  );

  return (
    <View autofocus {...props} ref={ContainerRef}>
      <SolidColumn {...props} animate style={styles.Column} width={400} height={500} ref={ColumnRef}>
        {props.children}
      </SolidColumn>
    </View>
  );
};

export default Column;
