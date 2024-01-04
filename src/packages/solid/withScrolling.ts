export function withScrolling(direction: 'column' | 'row', adjustment: number = 0) {
  return (componentRef, selectedElement, selected, lastSelected) => {
    let previousVal, newVal, next, size;
    const gap = componentRef.gap || 0;
    const scrollType = componentRef.scrollType;
    const [lastItem, windowVal] = updateLastIndex(componentRef, direction);

    if (componentRef.children.length === 0) {
      return;
    }

    // values based on row or column
    if (direction === 'row') {
      previousVal = componentRef.x;
      newVal = selectedElement.x;
      size = selectedElement.width;
    } else {
      previousVal = componentRef.y;
      newVal = selectedElement.y;
      size = selectedElement.height;
    }

    // TODO, find better name
    const direct = selected > lastSelected ? 'positive' : 'negative';

    next = previousVal;

    /** scrollIndex takes precedence */
    if (componentRef.scrollIndex != undefined && componentRef.scrollIndex >= 0) {
      if (componentRef.selected >= componentRef.scrollIndex) {
        if (direct === 'positive') {
          next = previousVal - size - gap;
        } else {
          next = previousVal + size + gap;
        }
      }

      /** want to scroll based on type */
    } else {
      // always scroll or lazyscroll forward
      if (
        scrollType === 'alwaysScroll' ||
        (scrollType === 'lazyScroll' && direct === 'negative' && Math.abs(previousVal) > newVal)
      ) {
        next = -newVal + adjustment;

        // lazy scroll backward
      } else if (
        scrollType === 'lazyScroll' &&
        direct === 'positive' &&
        Math.abs(previousVal) + windowVal < newVal + size
      ) {
        next = previousVal - size - gap;
      } else if (
        Math.abs(previousVal) + windowVal < lastItem.position + lastItem.size ||
        newVal < Math.abs(previousVal)
      ) {
        next = -newVal + adjustment;
      }
    }

    // updating value
    if (direction === 'row' && componentRef.x !== next) {
      componentRef.x = next;
    } else if (direction === 'column' && componentRef.y !== next) {
      componentRef.y = next;
    }
  };
}

function updateLastIndex(items, direction: 'column' | 'row') {
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
