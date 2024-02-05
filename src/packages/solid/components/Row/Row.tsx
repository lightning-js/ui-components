import { type Component } from 'solid-js';
import { View, type IntrinsicNodeProps } from '@lightningjs/solid';
import { Row as SolidRow } from '@lightningjs/solid-primitives';
import styles from './Row.styles.js';
import { withScrolling } from '../../utils/withScrolling.js';
import { chainFunctions } from '../../index.js';

export interface RowProps extends IntrinsicNodeProps {
  scrollIndex?: number;
  scrollType?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll';
}

const Row: Component<RowProps> = (props: RowProps) => {
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
      <SolidRow
        {...props}
        x={0}
        y={0}
        style={props?.style?.Container ?? styles.Container}
        onSelectedChanged={chainFunctions(props.onSelectedChanged, withScrolling())}
      />
    </View>
  );
};

export default Row;
