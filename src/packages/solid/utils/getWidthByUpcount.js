export function getWidthByUpCount(theme, upCount = 1) {
  const screenW = theme.layout.screenW;
  const columnCount = theme.layout.columnCount;
  const marginX = theme.layout.marginX;
  const gutterX = theme.layout.gutterX;

  if (upCount < 1 || upCount > columnCount) {
    console.error(`Column expects a number between 1 & ${columnCount}. Received ${upCount}`);
    return;
  }

  // the screen width, minus the margin x on each side
  const columnWidth = screenW - marginX * 2;
  // the total space of column gaps in between items
  const columnGapTotal = (upCount - 1) * gutterX;
  // the remaining amount of space left for all items
  const totalColumnsWidth = columnWidth - columnGapTotal;
  // the width of each item in that remaining width
  return totalColumnsWidth / upCount;
}