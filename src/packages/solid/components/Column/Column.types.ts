import type { IntrinsicNodeCommonProps, NodeStyles, SolidNode } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';
import type { Component } from 'solid-js';
import type { KeyHandler } from '@lightningjs/solid-primitives';
import type { ScrollableElement } from 'utils/withScrolling.js';

export interface ColumnProps extends UIComponentProps, ColumnStyleProperties {
  /** function run on component mount */
  onCreate?: IntrinsicNodeCommonProps['onCreate'];

  /** function to be called on down click */
  onDown?: KeyHandler;

  /** function to be called on up click */
  onUp?: KeyHandler;

  /** function to be called when the selected of the component changes */
  onSelectedChanged?: (
    this: ScrollableElement,
    elm: ScrollableElement,
    active: SolidNode,
    selectedIndex: number,
    lastSelectedIndex: number
  ) => void;

  /** Determines when to scroll(shift items along the axis):
   * auto - scroll items immediately
   * edge - scroll items when focus reaches the last item on screen
   * always - focus remains at index 0, scroll until the final item is at index 0
   * none - disable scrolling behavior, focus shifts as expected
   * in both `auto` and `edge` items will only scroll until the last item is on screen */
  scroll?: 'always' | 'none' | 'edge' | 'auto';

  /** When auto scrolling, item index at which scrolling begins */
  scrollIndex?: number;

  /** The initial index */
  selected?: number;
}

export type ScrollableComponent = Component<UIComponentProps | { scrollIndex?: number; selected?: number }>;

export interface ColumnStyleProperties {
  /**
   * The space between items in the column
   */
  itemSpacing?: NodeStyles['gap'];
  /**
   * The animation transition applied to items in the column on scroll
   */
  itemTransition?: NodeStyles['itemTransition'];
  /**
   * the index of which we want scrolling to start
   */
  scrollIndex?: NodeStyles['scrollIndex'];
}

export interface ColumnStyles {
  tone: Tone;
  Container: NodeStyleSet;
}

export type ColumnConfig = ComponentStyleConfig<ColumnStyleProperties>;
