import type { Component } from 'solid-js';
import { View, Show } from '@lightningjs/solid';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar';
//import Badge from '../Badge/Badge'
//import Badge from '../Badge/Badge';
//import Checkbox from '../Checkbox/Checkbox;
import styles from './Tile.styles';

type TileProps = {
  /**
   * Object containing all properties supported in the [Artwork component](?path=/docs/components-artwork--artwork)
   */
  artwork: object;
  /**
   * Object containing all properties supported in the [Badge component](?path=/docs/components-badge--text)
   */
  badge?: object;

  /**
   * Object containing all properties supported in the [Checkbox component](?path=/docs/components-checkbox--checkbox)
   */
  checkbox?: object;
  /**
   * If true, changes format of itemLayout to circle
   */
  circle?: boolean;
  /**
   * Conveys the status of a program ex. "Live" or "On Now"
   */
  label?: object;
  /**
   * Controls where there metadata is displayed in relation to the Tile. Available values are 'standard' and 'inset'
   */
  metadataLocation?: 'standard' | 'inset';
  /**
   * Object containing all properties supported in the [MetadataTile component](?path=/docs/components-metadatatile--metadata-tile)<br /> Can use a different Metadata component by passing in a 'type' and then that component's properties
   */
  metadata?: object;
  /**
   * Metadata will be shown at all times if set to true, otherwise it will only show when the Tile has focusMetadata will be shown at all times if set to true, otherwise it will only show when the Tile has focus
   */
  persistentMetadata?: boolean;
  /**
   * Object containing all properties supported in the [ProgressBar component](?path=/docs/components-progressbar--progress-bar)
   */
  progressBar: Partial<ProgressBarProps>;
  /**
   * total width of the component
   */
  width: number;
};

const Tile: Component<TileProps> = (props: TileProps) => {
  debugger;
  const showProg = () => (props.progressBar?.progress ? props.progressBar.progress > 0 : false);

  return (
    <View
      style={styles}
      {...props}
      borderRadius={styles.borderRadius}
      forwardStates
      //src={props.artwork.bgSrc}
      color="#aba1a1"
    >
      {/*       <background
        borderRadius={styles.borderRadius}
        {...dimensions}
        src={props.bgSrc}s
        color="#aba1a1"
      />

      <shade
        style={styles.Shade}
        borderRadius={styles.borderRadius}
        {...dimensions}
      /> */}

      {/*    TODO uncomment when Badge is merged   

      <Show when={props.badge}>
        <Badge
          style={badgeStyles}
          x={styles.paddingX}
          y={styles.paddingY}
        />
      </Show> */}

      {/*    TODO uncomment when Label is merged

      { <Show when={props.label}>
        <Label
          style={badgeStyles}
          x={styles.width - styles.paddingX}
          y={styles.paddingY}
          mountX={1}
        />
      </Show> */}

      <Show when={showProg()}>
        <View y={styles.height - styles.paddingY} x={styles.paddingX}>
          <ProgressBar
            borderRadius={props.progressBar.borderRadius}
            color={props.progressBar.color}
            progress={props.progressBar.progress || 0}
            progressColor={props.progressBar.progressColor}
            width={props.width - styles.paddingX * 2}
          />
        </View>
      </Show>
    </View>
  );
};

export default Tile;
