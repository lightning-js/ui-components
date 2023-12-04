import { Component, createEffect, on } from 'solid-js';
import { View, activeElement, type IntrinsicNodeProps } from '@lightningjs/solid';
import { Row as SolidRow } from '@lightningjs/solid-primitives';
import styles from './Row.styles';
import { getScrollValue } from 'utils';
import theme from 'theme';

export interface RowProps extends IntrinsicNodeProps {
  /**
   * components to be listed in the Row
   */
  children: object;
  /** Scroll to selected index */
  scroll: number;
  /** Item index at which scrolling begins */
  scrollIndex: number;
  /**
   * If true, will only scroll the row if the item is off screen and `alwaysScroll` and `neverScroll` are both false.
   */
  lazyScroll?: boolean;
}

const Row: Component<RowProps> = (props: RowProps) => {
  let RowRef, ContainerRef, prevIndex, nextRow, nextX, direction;

  createEffect(
    on(
      activeElement,
      elm => {
        if (ContainerRef === elm) {
          RowRef.children[RowRef.selected].setFocus();
        }
        if (RowRef.selected === prevIndex) {
          return;
        }

        prevIndex = RowRef.selected;

        if (RowRef.children[RowRef.selected].x > Math.abs(RowRef.x)) {
          direction = 'positive';
        } else {
          direction = 'negative';
        }

        nextX = getScrollValue(
          'row',
          direction,
          RowRef.x,
          RowRef.children[RowRef.selected],
          RowRef.width,
          props.lazyScroll,
          props.gap || styles.Row.gap
        );

        //prevent repeat x updates
        if (RowRef.x !== nextX) {
          RowRef.x = nextX;
        }
      },
      { defer: true }
    )
  );

  return (
    <View autofocus {...props} ref={ContainerRef}>
      <SolidRow {...props} animate style={styles.Row} width={800} height={500} ref={RowRef}>
        {props.children}
      </SolidRow>
    </View>
  );
};

export default Row;
