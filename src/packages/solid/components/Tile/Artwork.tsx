import { Component, createMemo } from 'solid-js';
import { Text } from '@lightningjs/solid';
import { View, type IntrinsicNodeProps } from '@lightningjs/solid';
import styles from './Artwork.styles';
import { withPadding } from '@lightningjs/solid-primitives';
import theme from 'theme';
import { hexColor } from '@lightningjs/solid';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

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
    w: number;
    h: number;
  }) => string;
}

export interface ArtworkStyleProps {}

const Artwork: Component<ArtworkProps> = props => {
  const formatArtwork = (props: ArtworkProps) => {
    let src = props.src ? props.src : props.fallbackSrc;

    if (src && props.srcCallback && typeof props.srcCallback === 'function') {
      src = props.srcCallback({
        closestAspectRatio: undefined,
        aspectRatio: undefined,
        src: src,
        w: props.width,
        h: props.height
      });
    }
    return src;
  };

  const formattedArtwork = createMemo(() => formatArtwork(props));

  return <View {...props} style={styles.Container} src={formattedArtwork()} />;
};

export default Artwork;
