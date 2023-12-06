import { Component, createSignal } from 'solid-js';
import { Show, type IntrinsicNodeProps, View, Text } from '@lightningjs/solid';
import styles from './Tile.styles';
import { withPadding } from '@lightningjs/solid-primitives';
import Label, { type LabelProps } from './Label';
import Artwork, { type ArtworkProps } from './Artwork.jsx';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar';
withPadding;

export interface TileProps extends IntrinsicNodeProps {
  /**
   * String to img source for artwork
   */
  artwork: Partial<ArtworkProps>;
  /**
   * If true, changes format of itemLayout to circle
   */
  circle?: boolean;
  /**
   * Controls where there metadata is displayed in relation to the Tile. Available values are 'standard' and 'inset'
   */
  metadataLocation: 'standard' | 'inset';
  /**
   * Object containing all properties supported in the [MetadataTile component](?path=/docs/components-metadatatile--metadata-tile)<br /> Can use a different Metadata component by passing in a 'type' and then that component's properties
   */
  metadata?: Partial<MetadataProps> | undefined;
  /**
   * Metadata will be shown at all times if set to true, otherwise it will only show when the Tile has focusMetadata will be shown at all times if set to true, otherwise it will only show when the Tile has focus
   */
  persistentMetadata?: boolean;
  /**
   * property that holds the components to be put in topLeft View of tile
   */
  topLeft?: any;
  /**
   * property that holds the components to be put in topRight View of tile
   */
  topRight?: any;
  /**
   * property that holds the components to be put in inset View of tile
   */
  inset?: any;
  /**
   * property that holds the components to be put in bottom View of tile
   */
  bottom?: any;

  progressBar?: Partial<ProgressBarProps> | undefined;
  
  

}

const Tile: Component<TileProps> = (props: TileProps) => {
  const [isFocused, setIsFocused] = createSignal(false);

  console.log(props)
  return (
    <node
      use:withPadding={styles.Container.padding}
      {...props}
      style={styles.Container}
      animate
      forwardStates
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Artwork {...props.artwork} width={props.width||styles.Container.width} height={props.height|| styles.Container.width} alt="Solid logo" />

      <View forwardStates x={styles.Container.padding[0]} y={styles.Container.padding[1]}>
        {props.topLeft}
      </View>

      <View
        forwardStates
        x={(props.width || styles.Container.width) - styles.Container.padding[0]}
        y={styles.Container.padding[1]}
        mountX={2}
      >
        {props.topRight}
      </View>

      <View
        mountY={1}
        forwardStates
        styles={styles.insetBottom}
        width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
        x={styles.Container.padding[0]}
        y={(props.height || styles.Container.height) - styles.Container.padding[1] -
          (props.progressBar ? styles.Container.paddingYProgress : 0)}
      >
        {...props.inset}
      </View>
      
      
      <View
        forwardStates
        x={styles.Container.padding[0]}
        y={(props.height || styles.Container.height) + styles.Container.padding[1]}
        width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
      >
        {props.bottom}
      </View>

      {/** Progress Bar*/}
      {/** scoped Views?? */}
      <Show when={props.progressBar?.progress ? props.progressBar.progress > 0 : 0}>
        <ProgressBar
          {...props.progressBar}
          width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
          x={styles.Container.padding[0]}
          y={
            (props.height || styles.Container.height) -
            styles.Container.paddingYProgress -
            (props.progressBar.height || 0)
          }
        />
      </Show>
    </node>
  );
};

export default Tile;
