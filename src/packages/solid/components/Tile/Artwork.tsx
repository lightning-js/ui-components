import { type Component, createMemo } from 'solid-js';
import { View, type IntrinsicNodeProps } from '@lightningjs/solid';
import styles from './Artwork.styles.js';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding;

export interface ArtworkProps extends ArtworkStyleProps, IntrinsicNodeProps {
  /**
   * Handles any blur/gradient/shader effects
   */
  effects?: object;
  /**
   * Sets the fallback image that will be shown in if the src request fails
   */
  fallbackSrc?: string;
  /**
   * Which image will be displayed
   */
  src: string; // Inherited from lng.Element
  /**
   * optional callback that can be used to generate custom strings to request an image. The callback will be passed an object containing the following parameters: aspectRatio, src, w, h. Be default aspect ratio will match the closest value from srcCallbackAspectRatios
   */
  srcCallback?: (obj: {
    closestAspectRatio: string | undefined;
    aspectRatio: string | undefined;
    src: string;
    width: number;
    height: number;
  }) => string;
}

export interface ArtworkStyleProps {}

const Artwork: Component<ArtworkProps> = props => {
  const formatArtwork = (props: ArtworkProps) => {
    /* eslint-disable solid/reactivity */ // this is fine, the call is wrapped in a memo
    let src = props.src ? props.src : props.fallbackSrc;

    if (src && props.srcCallback && typeof props.srcCallback === 'function') {
      src = props.srcCallback({
        closestAspectRatio: undefined,
        aspectRatio: undefined,
        src: src,
        width: props.width,
        height: props.height
      });
    }
    return src;
  };

  const formattedArtwork = createMemo(() => formatArtwork(props));

  return <View {...props} style={styles.Container} src={formattedArtwork()} />;
};

export default Artwork;
