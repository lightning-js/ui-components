import { Component, createEffect, on } from 'solid-js';
import { View, activeElement } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles';

// LUI Column props:
// items (children) - components to be listed in the column
// onScreenItems - list of items currently on the screen
// plinko - boolean
// selected - component that is currently in focus
// selectedIndex - index of current selected item

// LUI methods:
// shouldScroll
// checkSkipPlinko
// removeItem
// columnChanged - probably not needed

type ColumnProps = {
  children: object;
  width: number;
  height: number;
};

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  let ColumnRef, ContainerRef, prevIndex;

  // handle whether children are visible
  const handleShow = () => {
    ColumnRef.children.map((child, i) => {
      child.alpha = 1;
    });
  };

  // handle whether children are visible
  const handleHide = () => {
    ColumnRef.children.map((child, i) => {
      if (i < ColumnRef.selected) {
        child.alpha = 0;
      }
    });
  };
  let hideTimeout; // taken from demo app

  // taken from demo app
  // assess which is relevant to keep
  createEffect(
    on(
      activeElement,
      (elm) => {
        if (ContainerRef === elm) {
          ColumnRef.children[ColumnRef.selected].states.add('focus'); // tried setFocus()
        }
        if (ColumnRef.selected === prevIndex) {
          return;
        }
        prevIndex = ColumnRef.selected;
        handleShow();
        clearTimeout(hideTimeout);

        const nextRow = ColumnRef.children[ColumnRef.selected];
        let nextY = -nextRow.y;

        //prevent repeat y updates
        if (ColumnRef.y !== nextY) {
          ColumnRef.y = nextY;
        }
        // used to create timed hide of prev children
        hideTimeout = setTimeout(() => {
          handleHide();
        }, 650);
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
