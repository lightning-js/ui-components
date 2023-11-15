import { Component, createEffect, on } from 'solid-js';
import { View, activeElement, setActiveElement, type IntrinsicNodeProps } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles';

// LUI Column props:
// onScreenItems - list of items currently on the screen
// plinko - boolean
// selected - component that is currently in focus
// selectedIndex - index of current selected item

// LUI methods:
// shouldScroll
// checkSkipPlinko
// removeItem
// columnChanged - probably not needed

export interface ColumnProps extends IntrinsicNodeProps {
  /**
   * components to be listed in the column
   */
  children: object;
}

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  let ColumnRef, ContainerRef, prevIndex;

  // taken from demo app
  createEffect(
    on(
      activeElement,
      (elm) => {
        if (ContainerRef === elm) {
          ColumnRef.children[ColumnRef.selected].setFocus();
        }
        if (ColumnRef.selected === prevIndex) {
          return;
        }
        prevIndex = ColumnRef.selected;

        const nextRow = ColumnRef.children[ColumnRef.selected];
        let nextY = -nextRow.y;
        console.log(ColumnRef.children);

        //prevent repeat y updates
        if (ColumnRef.y !== nextY) {
          ColumnRef.y = nextY;
        }
      },
      { defer: true }
    )
  );

  return (
    <View autofocus {...props} ref={ContainerRef}>
      <SolidColumn {...props} style={styles.Column} width={400} height={500} ref={ColumnRef}>
        {props.children}
      </SolidColumn>
    </View>
  );
};

export default Column;
