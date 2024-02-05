import { type Component } from 'solid-js';
import { View, type IntrinsicNodeProps } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles.js';
import { withScrolling } from '../../utils/withScrolling.js';
import { chainFunctions } from '../../index.js';

export interface ColumnProps extends IntrinsicNodeProps {
  /** Item index at which scrolling begins */
  scrollIndex?: number;
  scrollType?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll';
}

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  return (
    <View
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      forwardFocus={0}
      clipping
      style={props?.style?.Container ?? styles.Container}
    >
      <SolidColumn
        {...props}
        x={0}
        y={0}
        style={props?.style?.Container ?? styles.Container}
        onSelectedChanged={chainFunctions(props.onSelectedChanged, withScrolling())}
      />
    </View>
  );
};

export default Column;
