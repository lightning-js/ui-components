import { type Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
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
    <SolidRow
      {...props}
      style={styles.Container}
      onSelectedChanged={chainFunctions(props.onSelectedChanged, withScrolling(props.x as number))}
    />
  );
};

export default Row;
