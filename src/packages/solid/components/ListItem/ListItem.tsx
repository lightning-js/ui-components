import { type Component, createSignal } from 'solid-js';
import { Show, type NodeProps, Text, View } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import Artwork, { type ArtworkProps } from '../Artwork/Artwork.jsx';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar.jsx';
import styles, { type ListItemStyleProperties, type ListItemStyles } from './ListItem.styles.js';
import type { Tone } from '../../types/types.js';

export interface ListItemProps extends NodeProps {
  title?: String,
  description?: String,
  tone?: Tone;
  style?: Partial<ListItemStyles>;
}

const ListItem: Component<ListItemProps> = (props:ListItemProps) => {
  return (
    <View width={500} height={500} color={0xff0000ff}>
      <Text>Hello World</Text>
    </View>
  )
}

export default ListItem;