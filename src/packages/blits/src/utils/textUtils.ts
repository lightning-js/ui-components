// calculate width of text using dummy canvas element - hopefully blits will get flex soon so we dont need to do this
export const getTextWidth = (content: string, font: string, fontSize: number) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx!.font = `${fontSize}px ${font}`;
  const text = ctx!.measureText(content);
  canvas.remove();

  return text.width;
};
