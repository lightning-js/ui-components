import { Component, createEffect, on } from 'solid-js';
import { View, activeElement, type IntrinsicNodeProps } from '@lightningjs/solid';
import { Row as SolidRow } from '@lightningjs/solid-primitives';
import styles from './Row.styles';

export interface RowProps extends IntrinsicNodeProps {
  /**
   * components to be listed in the Row
   */
  children: object;
  /** Scroll to selected index */
  scroll: number;
  /** Item index at which scrolling begins */
  scrollIndex: number;
}

const Row: Component<RowProps> = (props: RowProps) => {
  let RowRef, ContainerRef, prevIndex;

  createEffect(
    on(
      activeElement,
      (elm) => {
        if (ContainerRef === elm) {
          RowRef.children[RowRef.selected].setFocus();
        }
        if (RowRef.selected === prevIndex) {
          return;
        }
        prevIndex = RowRef.selected;
        const nextRow = RowRef.children[RowRef.selected];
        let nextX = -nextRow.x;
        // prevent repeat x updates
        if (RowRef.x !== nextX) {
          RowRef.x = nextX;
        }
      },
      { defer: true }
    )
  );

  return (
    <View autofocus {...props} ref={ContainerRef}>
      <SolidRow {...props} animate style={styles.Row} width={400} height={500} ref={RowRef}>
        {props.children}
      </SolidRow>
    </View>
  );
};

export default Row;