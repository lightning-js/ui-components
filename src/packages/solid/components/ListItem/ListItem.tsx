import { type Component } from 'solid-js';
import { Text, View } from '@lightningjs/solid';
import styles, { type ListItemStyles } from './ListItem.styles.js';
import type { Tone } from '../../types/types.js';

export interface ListItemProps {
  title?: string,
  description?: string,
  tone?: Tone;
  style?: Partial<ListItemStyles>;
}

const ListItem: Component<ListItemProps> = (props) => {
  return (
    <View
      {...props}
      style={[
        ...[props.style].flat(),
        styles.Container.tones?.[props.tone ?? styles.tone], // Assuming defaultTone is defined somewhere or use a literal string
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        style={[
          ...[props.style?.Title].flat(),
          styles.Title.tones[props.tone ?? styles.tone], // Same assumption as above
          styles.Title.base
        ]}
      >
        {props.title}
      </Text>
      <Text
        y={styles.Description.base.y}
        style={[
          ...[props.style?.Description].flat(),
          styles.Description.tones[props.tone ?? styles.tone], // Same assumption as above
          styles.Description.base
        ]}
      >
        {props.description}
      </Text>
    </View>
  );
}

export default ListItem;
