import { type Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import { Column as SolidColumn } from '@lightningjs/solid-primitives';
import styles from './Column.styles.js';
import { withScrolling } from '../../utils/withScrolling.js';

export interface ColumnProps extends IntrinsicNodeProps {
  /** Item index at which scrolling begins */
  scrollIndex?: number;
  scrollType?: 'alwaysScroll' | 'neverScroll' | 'lazyScroll';
}

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  const multiFunction = (callback: Function | any, originalFunc: Function) => {
    return (...args: any[]) => {
      typeof callback === 'function' && callback.apply(this, args);
      originalFunc.apply(this, args);
    };
  };

  return (
    <SolidColumn
      {...props}
      style={styles.Container}
      onSelectedChanged={multiFunction(props.onSelectedChanged, withScrolling(props.x as number))}
    />
  );
};

export default Column;
