import theme from 'theme';

export function getScrollValue(orientation, direction, previousVal, selected, windowVal, lazyScroll, gap) {
  let newValue, componentSize;

  if (orientation == 'row') {
    newValue = selected.x;
    componentSize = selected.width;
  } else {
    newValue = selected.y;
    componentSize = selected.height;
  }

  //if lazy scroll
  if (lazyScroll) {
    // scroll positively
    if (direction == 'positive' && Math.abs(previousVal) + windowVal < newValue + componentSize) {
      return previousVal - componentSize - gap;

      // scrolling negatively
    } else if (direction == 'negative' && Math.abs(previousVal) > newValue) {
      return -newValue;
    }
    // if not lazy scroll
  } else {
    return -newValue;
  }

  return previousVal;
}
