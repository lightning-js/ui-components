import theme from 'theme';

export function getScrollValue(obj) {
  switch (obj.scrollType) {
    case 'lazyScroll':
      if (
        obj.direction === 'positive' &&
        Math.abs(obj.previousVal) + obj.windowVal < obj.newValue + obj.scrollSize
      ) {
        return obj.previousVal - obj.scrollSize;

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

      if (Math.abs(obj.previousVal) + obj.windowVal < obj.lastItemPostion + obj.lastItemSize) {
        return -obj.newValue;
      } else {
        return obj.previousVal;
      }
  }
}
