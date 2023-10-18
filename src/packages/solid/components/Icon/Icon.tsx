import type { Component } from 'solid-js';
import { View } from '@lightningjs/solid';
import styles from './Icon.styles';

type IconProps = {
    /**
   * icon color (can only be applied on png icons)
   */
  color: number;
  /**
   * when `true`, icon width and height will not dynamically resize to the final texture's `finalW` and `finalH` properties
   */
  fixed?: boolean;

  /**
   * path to image or inline SVG XML
   */
  icon?: string;
}

const Icon: Component<IconProps> = (props: IconProps) => {
  debugger
  return (
    <View
      {...props} 
      // TODO, format height and width based on fixed value
      src={props.icon}
      y={10}
      x={10}
      style={styles.container} 
    ></View>
  );

}

export default Icon;


