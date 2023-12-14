import { createEffect, on } from 'solid-js';
import { activeElement, ElementNode } from '@lightningjs/solid';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      withScroling: [() => any, (props: any) => any];
    }
  }
}

export function withScrolling(el: ElementNode, props) {
  const [direction, prop, gap] = props();
  const scrollType = prop.scrollType ? prop.scrollType : '';
  let lastItemPosition, lastItemSize, windowVal, prevIndex;

  if (direction === 'row') {
    lastItemPosition = el.children[el.children.length - 1].x;
    lastItemSize = el.children[el.children.length - 1].width;
    windowVal = el.width;
  } else {
    lastItemPosition = el.children[el.children.length - 1].y;
    lastItemSize = el.children[el.children.length - 1].height;
    windowVal = el.height;
  }

  createEffect(
    on(
      activeElement,
      elm => {
        let previousVal, newVal, next, size;

        if (elm == el) {
          el.children[0][elm.selected].setFocus();
        }
        if (elm.selected === prevIndex) {
          return;
        }

        // values based on row or column
        if (direction === 'row') {
          previousVal = el.x;
          newVal = elm.children[elm.selected].x;
          size = elm.children[elm.selected].width;
          windowVal = elm.width;
        } else {
          previousVal = el.y;
          newVal = elm.children[elm.selected].y;
          size = elm.children[elm.selected].height;
          windowVal = elm.height;
        }
        // TODO, find better name
        const direct = newVal > previousVal ? 'positive' : 'negative';

        /** scrollIndex takes precedence */
        if (prop.scrollIndex != undefined && prop.scrollIndex >= 0) {
          next = previousVal;
          if (el.selected >= prop.scrollIndex) {
            if (direct === 'positive') {
              next = previousVal - size - gap;
            } else {
              next = previousVal + size + gap;
            }
          }

          /** want to scroll based on type */
        } else {
          switch (scrollType) {
            case 'lazyScroll':
              // if have to scroll positively
              if (direct === 'positive' && Math.abs(previousVal) + windowVal < newVal + gap) {
                next = previousVal - newVal - gap;

                // scrolling negatively
              } else if (direct === 'negative' && Math.abs(previousVal) > newVal) {
                next = -newVal;

                // not scrolling
              } else {
                next = previousVal;
              }
              break;

            case 'alwaysScroll':
              next = -newVal;
              break;
            case 'neverScroll':
              next = previousVal;
              break;
            default:
              // if every component is on the screen
              if (Math.abs(previousVal) + windowVal < lastItemPosition + lastItemSize) {
                next = -newVal;
              } else {
                next = previousVal;
              }
              break;
          }

          prevIndex = el.selected;

          // updating value
          if (direction === 'row' && el.x !== next) {
            el.x = next;
          } else if (direction === 'column' && el.y !== next) {
            el.y = next;
          }
        }
      },
      { defer: true }
    )
  );
}
