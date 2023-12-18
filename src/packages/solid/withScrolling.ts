import { createEffect, on } from 'solid-js';
import { activeElement, ElementNode } from '@lightningjs/solid';

export function withScrolling(containerRef: ElementNode, props) {
  let lastItemPosition,
    lastItemSize,
    windowVal,
    prevIndex = 0,
    componentRef,
    updateIndex = false;

  const [direction, prop, gap] = props();
  const scrollType = formatScrollType(prop.scrollType);

  createEffect(
    on(
      activeElement,
      elm => {
        let previousVal, newVal, next, size;

        // only update values if the row has changed
        if (updateIndex || containerRef.children[0] != componentRef) {
          componentRef = containerRef.children[0];
          [lastItemPosition, lastItemSize, windowVal] = updateLastIndex(componentRef, direction);
          updateIndex = false;
        }

        // set row to focus if not already
        if (elm == containerRef) {
          updateIndex = true;
          componentRef.children[componentRef.selected].setFocus();
        }

        // do nothing if selected change
        if (componentRef.selected === prevIndex) {
          return;
        }

        // values based on row or column
        if (direction === 'row') {
          previousVal = componentRef.x;
          newVal = componentRef.children[componentRef.selected].x;
          size = componentRef.children[componentRef.selected].width;
        } else {
          previousVal = componentRef.y;
          newVal = componentRef.children[componentRef.selected].y;
          size = componentRef.children[componentRef.selected].height;
        }

        // TODO, find better name
        const direct = componentRef.selected > prevIndex ? 'positive' : 'negative';

        prevIndex = componentRef.selected;
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
            (Math.abs(previousVal) + windowVal < lastItemPosition + lastItemSize ||
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
      },
      { defer: true }
    )
  );
}

function updateLastIndex(items, direction) {
  debugger;
  let lastItemPosition, lastItemSize, windowVal;
  if (direction === 'row') {
    lastItemPosition = items.children[items.children.length - 1].x;
    lastItemSize = items.children[items.children.length - 1].width;
    windowVal = items.width;
  } else {
    lastItemPosition = items.children[items.children.length - 1].y;
    lastItemSize = items.children[items.children.length - 1].height;
    windowVal = items.height;
  }

  return [lastItemPosition, lastItemSize, windowVal];
}

function formatScrollType(scrollType) {
  debugger;
  if (
    scrollType == undefined ||
    (scrollType != 'alwaysScroll' && scrollType != 'neverScroll' && scrollType != 'lazyScroll')
  ) {
    scrollType = 'default';
  }
  return scrollType;
}
