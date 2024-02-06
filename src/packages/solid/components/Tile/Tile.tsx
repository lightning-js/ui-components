import { type Component, createSignal } from 'solid-js';
import { Show, type NodeProps, View } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import Artwork, { type ArtworkProps } from '../Artwork/Artwork.jsx';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar.jsx';
import styles from './Tile.styles.js';
withPadding;

export interface TileProps extends NodeProps {
  /**
   * prop object passed to the child Artwork component
   */
  artwork: ArtworkProps;

  /**
   * Controls how slotted components will be rendered. By default all slotted
   * components will be hidden until the focus state is applied, where they will
   * then be shown. If `persistentMetadata` is set to `true`, all slotted components
   * will be rendered regardless of focus.
   *
   * "slotted components" refers to any component passed to the following properties:
   * - topLeft
   * - topRight
   * - bottom
   * - inset
   */
  persistentMetadata?: boolean;

  /**
   * component rendered to the upper left corner of the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  topLeft?: NodeProps['children'];

  /**
   * component rendered to the upper right corner of the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  topRight?: NodeProps['children'];

  /**
   * component rendered to center of the Tile, flex-aligned to the bottom border
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  inset?: NodeProps['children'];

  /**
   * component rendered below the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  bottom?: NodeProps['children'];

  /**
   * props passed to the child ProgressBar, rendered at the bottom of the component.
   * ProgressBar will not appear if progressBar.progress is 0/falsy
   */
  progressBar?: Partial<ProgressBarProps> | undefined;
}

const Tile: Component<TileProps> = (props: TileProps) => {
  const [isFocused, setIsFocused] = createSignal(false);
  return (
    <node
      use:withPadding={styles.Container.padding}
      forwardStates
      {...props}
      style={styles.Container}
      tone={props.tone ?? styles.tone}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Artwork
        {...props.artwork}
        tone={props.tone ?? styles.tone}
        width={props.width || styles.Container.width}
        height={props.height || styles.Container.height}
      />

      <Show when={props.persistentMetadata || isFocused()}>
        <View x={styles.Container.padding[0]} y={styles.Container.padding[1]}>
          {props.topLeft}
        </View>

        <View
          x={(props?.width || styles.Container.width) - styles.Container.padding[0]}
          y={styles.Container.padding[1]}
          mountX={1}
        >
          {props.topRight}
        </View>

        <View
          style={styles.InsetBottom}
          width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
          x={styles.Container.padding[0]}
          y={
            (props.height || styles.Container.height) -
            styles.Container.padding[1] -
            (props.progressBar?.progress > 0 ? styles.Container.paddingYProgress : 0)
          }
        >
          {props.inset}
        </View>

        <View
          style={styles.StandardBottom}
          x={styles.Container.padding[0]}
          y={Number(props.height || styles.Container.height) + styles.Container.padding[1]}
          width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
        >
          {props.bottom}
        </View>
      </Show>

      <Show when={props.progressBar?.progress ? props.progressBar.progress > 0 : 0}>
        <ProgressBar
          {...props.progressBar}
          width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
          x={styles.Container.padding[0]}
          y={
            (props.height || styles.Container.height) -
            styles.Container.paddingYProgress -
            (props?.progressBar?.height || 0)
          }
        />
      </Show>
    </node>
  );
};

export default Tile;
