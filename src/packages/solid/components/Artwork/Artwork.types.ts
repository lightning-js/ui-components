export interface ArtworkStyleProperties {
  /** URI of fallback image to be shown if the src request fails */
  fallbackSrc?: NodeStyles['src'];

  /**
   * solid color background, displayed if no src is provided or URI is invalid
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  fillColor?: NodeStyles['color'];

  /**
   * starting color the linear gradient effect to apply on top of image
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/core/renderers/webgl/shaders/effects/LinearGradientEffect.ts#L35 LinearGradientEffectProps.colors}
   * */
  gradientColor?: NodeStyles['linearGradient'];

  /**
   * The scale value multiplies the provided width and height of the Node.
   *
   * core reference:
   * {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L260 INodeWritableProps.scale}
   *
   */
  imageScale?: NodeStyles['scale'];

  /**
   * X position of the Node's Pivot Point
   *
   * core reference:
   * {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L375 INodeWritableProps.pivotX}
   */
  imageScalePivotX?: NodeStyles['pivotX'];

  /**
   * Y position of the Node's Pivot Point
   *
   * core reference:
   * {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L390 INodeWritableProps.pivotY}
   */
  imageScalePivotY?: NodeStyles['pivotY'];
  radius?: NodeStyles['borderRadius'];

  // TODO future adds
  // blur: number; not in renderer yet
  // padding: number; is this just support for CSS padding?
}

export interface ArtworkStyles {
  tone: Tone;
  Container: NodeStyleSet<{
    fallbackSrc: NodeStyles['src'];
    fillColor: NodeStyles['color'];
    gradientColor: NodeStyles['color'];
  }>;
}

export type ArtworkConfig = ComponentStyleConfig<ArtworkStyleProperties>;
