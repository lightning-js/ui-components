import theme from 'theme';

export function getScrollValue(obj) {

  // designated scroll index
  if (obj.scrollIndex != undefined && obj.scrollIndex >= 0) {
    // if we want to scroll via style
    if (obj.selectedIndex >= obj.scrollIndex) {
      if (obj.direction === 'positive') {
        return obj.previousVal - obj.componentSize - obj.gap;
      } else {
        return obj.previousVal + obj.componentSize + obj.gap;
      }
    } else {
      return obj.previousVal;
    }
  } else {
    switch (obj.scrollType) {
      case 'lazyScroll':
        if (
          obj.direction === 'positive' &&
          Math.abs(obj.previousVal) + obj.windowVal < obj.newValue + obj.componentSize
        ) {
          return obj.previousVal - obj.componentSize - obj.gap;

          // scrolling negatively
        } else if (obj.direction === 'negative' && Math.abs(obj.previousVal) > obj.newValue) {
          return -obj.newValue;
        }
        return obj.previousVal;
      case 'alwaysScroll':
        return -obj.newValue;
      case 'neverScroll':
        return obj.previousVal;
      default:
        // if every component is on the screen

        const lastItem = obj.children[obj.children.length - 1];
        if (Math.abs(obj.previousVal) + obj.windowVal < lastItem.x + lastItem.width) {
          return -obj.newValue;
        } else {
          return obj.previousVal;
        }
    }
  }
}
