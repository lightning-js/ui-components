import theme from 'theme';

export function getScrollValue(obj) {
  debugger

  //if lazy scroll
  if (obj?.lazyScroll) {
    // scroll positively
    if (obj.direction == 'positive' && Math.abs(obj.previousVal) + obj.windowVal < obj.newValue + obj.componentSize) {
      return obj.previousVal - obj.componentSize - obj.gap;

      // scrolling negatively
    } else if (obj.direction == 'negative' && Math.abs(obj.previousVal) > obj.newValue) {
      return -obj.newValue;
    }
    // if not lazy scroll
  } else {
    return -obj.newValue;
  }

  return obj.previousVal;
}
