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
  // assess which is relevant and keep
  createEffect(
    on(
      activeElement,
      (elm) => {
        if (ContainerRef === elm) {
          console.log('ContainerRef is elm', ColumnRef);
          ColumnRef.children[ColumnRef.selected].states.add('focus'); // tried setFocus()
        }
        if (ColumnRef.selected === prevIndex) {
          return;
        }
        prevIndex = ColumnRef.selected;
        handleShow();
        clearTimeout(hideTimeout);

        const nextRow = ColumnRef.children[ColumnRef.selected];
        let nextY = -nextRow.y; // what's the math here?

        // in the demo columnScrollHeight is a prop from the row
        if (typeof nextRow.columnScrollHeight !== 'undefined') {
          nextY -= ContainerRef.y - nextRow.columnScrollHeight;
        } else if (nextRow.title) {
          nextY -= 60;
        }
        // prevent repeat y updates
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
      <SolidColumn {...props} style={styles.Column} ref={ColumnRef}>
        {props.children}
      </SolidColumn>
    </View>
  );
};

export default Column;
