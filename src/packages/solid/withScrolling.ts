import { createEffect, on } from 'solid-js';
import { activeElement, ElementNode } from '@lightningjs/solid';

export function withScrolling(props) {
  return (componentRef, elms, selected, lastSelected) => {
    debugger;

    let previousVal, newVal, next, size;

    const [direction, prop, gap] = props;

    const scrollType = formatScrollType(prop.scrollType);
    const [lastItem, windowVal] = updateLastIndex(componentRef, direction);

    if (componentRef.children.length === 0) {
      return;
    }
    componentRef.selected = selected;

    // values based on row or column
    if (direction === 'row') {
      previousVal = componentRef.x;
      newVal = componentRef.children[selected].x;
      size = componentRef.children[selected].width;
    } else {
      previousVal = componentRef.y;
      newVal = componentRef.children[selected].y;
      size = componentRef.children[selected].height;
    }

    // TODO, find better name
    const direct = selected > lastSelected ? 'positive' : 'negative';

    next = previousVal;

    /** scrollIndex takes precedence */
    if (prop.scrollIndex != undefined && prop.scrollIndex >= 0) {
      if (componentRef.selected >= prop.scrollIndex) {
        if (direct === 'positive') {
          next = previousVal - size - gap;
        } else {
          next = previousVal + size + gap;
        }
      }

      /** want to scroll based on type */
    } else {
      //default scrolling
      if (
        scrollType === 'default' &&
        (Math.abs(previousVal) + windowVal < lastItem.position + lastItem.size ||
          newVal < Math.abs(previousVal))
      ) {
        next = -newVal;
      }

      // always scroll or lazyscroll forward
      else if (
        scrollType === 'alwaysScroll' ||
        (scrollType === 'lazyScroll' && direct === 'negative' && Math.abs(previousVal) > newVal)
      ) {
        next = -newVal;

        // lazy scroll backward
      } else if (
        scrollType === 'lazyScroll' &&
        direct === 'positive' &&
        Math.abs(previousVal) + windowVal < newVal + size
      ) {
        next = previousVal - size - gap;
      }
    }

    // updating value
    if (direction === 'row' && componentRef.x !== next) {
      componentRef.x = next;
    } else if (direction === 'column' && componentRef.y !== next) {
      componentRef.y = next;
    }
    // }
    // //       },
    // //       { defer: true }
    // //     )
    // //   );
    // // }
  };
}

function updateLastIndex(items, direction) {
  let lastItem, windowVal;
  if (direction === 'row') {
    lastItem = {
      position: items.children[items.children.length - 1].x,
      size: items.children[items.children.length - 1].width
    };
    windowVal = items.width;
  } else {
    lastItem = {
      position: items.children[items.children.length - 1].y,
      size: items.children[items.children.length - 1].height
    };
    windowVal = items.height;
  }

  return [lastItem, windowVal];
}

function formatScrollType(scrollType) {
  if (
    scrollType === undefined ||
    (scrollType != 'alwaysScroll' && scrollType != 'neverScroll' && scrollType != 'lazyScroll')
  ) {
    scrollType = 'default';
  }
  return scrollType;
}
