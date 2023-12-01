import { Component, createSignal } from 'solid-js';
import { Show, type IntrinsicNodeProps, View, Text } from '@lightningjs/solid';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar';
import Badge, { type BadgeProps } from '../Badge/Badge';
import Checkbox, { type CheckboxProps } from '../Checkbox/Checkbox';
import Metadata, { type MetadataProps } from '../Metadata/Metadata';
import styles from './Tile.styles';
import { withPadding } from '@lightningjs/solid-primitives';
import Label, { type LabelProps } from './Label';
import Artwork, { type ArtworkProps } from './Artwork';
withPadding;

export interface TileProps extends TileStyleProps, IntrinsicNodeProps {
  /**
   * String to img source for artwork
   */
  artwork: Partial<ArtworkProps>;
  /**
   * Object containing all properties supported in the [Badge component](?path=/docs/components-badge--text)
   */
  badge?: Partial<BadgeProps>;
  /**
   * Source of logo
   */
  logo?: string;
  /**
   * Object containing all properties supported in the [Checkbox component](?path=/docs/components-checkbox--checkbox)
   */
  checkbox?: Partial<CheckboxProps>;
  /**
   * If true, changes format of itemLayout to circle
   */
  circle?: boolean;
  /**
   * Conveys the status of a program ex. "Live" or "On Now"
   */
  label?: Partial<LabelProps>;
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
   * Object containing all properties supported in the [ProgressBar component](?path=/docs/components-progressbar--progress-bar)
   */
  progressBar: Partial<ProgressBarProps>;
  /**
   * total width of the component
   */
  width: number;
}

const Tile: Component<TileProps> = (props: TileProps) => {
  const [isFocused, setIsFocused] = createSignal(false);

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
      <Artwork {...props.artwork} width={props.width} height={props.height} alt="Solid logo" />

      {/** Badge */}
      <Show when={props.badge?.title && (isFocused() || props.persistentMetadata)}>
        <Badge {...props.badge} x={styles.Container.padding[0]} y={styles.Container.padding[1]} />
      </Show>

      {/** Title */}
      <Show when={props.label?.title && (isFocused() || props.persistentMetadata)}>
        <Label
          {...props.label}
          x={(props.width || styles.Container.width) - styles.Container.padding[0]}
          y={styles.Container.padding[1]}
          mountX={1}
        />
      </Show>

      {/** inside tile */}
      <View
        forwardStates
        style={styles.metaContainer}
        x={styles.Container.padding[0]}
        y={
          (props.height || styles.Container.height) -
          (props.progressBar ? styles.Container.paddingYProgress : 0)
        }
      >
        {/** Logo */}
        <Show when={props.logo && (isFocused() || props.persistentMetadata)}>
          <img src={props.logo} style={styles.LogoContainer} />
        </Show>

        {/** Metadata inset */}
        <Show
          when={
            props.metadataLocation == 'inset' && props.metadata && (isFocused() || props.persistentMetadata)
          }
        >
          <Metadata
            {...props.metadata}
            width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
          />
        </Show>
      </View>

      {/** Progress Bar*/}
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

      {/** Metadata standard */}
      <Show when={props.metadataLocation == 'standard'}>
        <Show when={props.metadata && (isFocused() || props.persistentMetadata)}>
          <Metadata
            {...props.metadata}
            x={styles.Container.padding[0]}
            y={(props.height || styles.Container.height) + styles.Container.padding[1]}
            width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
          />
        </Show>
      </Show>

      {/** Checkbox */}
      <Show when={props.checkbox && props.checkbox.checked}>
        <Checkbox
          {...props.checkbox}
          x={(props.width || styles.Container.width) - styles.Container.padding[0]}
          y={(props.height || styles.Container.height) - styles.Container.padding[1]}
          mount={1}
        />
      </Show> 

    </node>
  );
};

export default Tile;
