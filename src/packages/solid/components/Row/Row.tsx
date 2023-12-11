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
  /** Item index at which scrolling begins */
  scrollIndex?: number;

  scrollStyle?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll' | undefined;
}

const Row: Component<RowProps> = (props: RowProps) => {
  let RowRef, ContainerRef, prevIndex, nextX;

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

        nextX = getScrollValue({
          children: RowRef.children,
          selectedIndex: RowRef.selected,
          direction: RowRef.selected > prevIndex ? 'positive' : 'negative',
          previousVal: RowRef.x,
          newValue: RowRef.children[RowRef.selected].x,
          componentSize: RowRef.children[RowRef.selected].width,
          windowVal: RowRef.width,
          scrollStyle: props.scrollStyle ? props.scrollStyle : '',
          scrollIndex: props.scrollIndex ? props.scrollIndex : undefined,
          gap: props.gap || styles.Row.gap
        });

        prevIndex = RowRef.selected;

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
