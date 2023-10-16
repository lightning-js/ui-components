import type { Component } from 'solid-js';
import { View } from '@lightningjs/solid';
import styles from './Icon.styles';

export type Color = number;

type IconProps = {
  /**
   * icon color (can only be applied on png icons)
   */
  color: Color;

  /**
   * when `true`, icon width and height will not dynamically resize to the final texture's `finalW` and `finalH` properties
   */
  fixed?: boolean;

  /**
   * path to image or inline SVG XML
   */
  icon?: string;
}

const Icon: Component<IconProps> = (props:IconProps) => {

  return (
      <View
      style={styles.container}
      {...props}
      >
        {props.icon}
    </View>
  );

}

export default Icon

