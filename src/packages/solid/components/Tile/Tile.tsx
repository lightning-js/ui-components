import type { Component } from 'solid-js';
import { View } from '@lightningjs/solid';
import styles from './Tile.styles';

type TileProps = {
  //artwork, badge, checkbox, circle, label, metadataLocation, metadata, persistentMetadata, progressBar
};

const Tile: Component<TileProps> = (props: TileProps) => {
  return (
    <View 
      style={styles.container} 
      {...props}>

    </View>
  );
};

export default Tile;
