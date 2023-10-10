import { mergeProps, splitProps } from 'solid-js';
import { useItemLayout } from './useItemLayout';

/**
 * @typedef {Object} Properties
 * @property {Object} props
 * @property {Object} styles
 * @property {{width: number, height: number}} dimensions
 */

/**
 *
 * @param {Object} props
 * @param {Object} styles
 * @returns {Properties}
 */
export function useStyles(componentProps, componentStyles) {
  const layoutSize = useItemLayout(componentProps.itemLayout);
  const [dimensionProps] = splitProps(componentProps, ['width', 'height']);

  const mergedProps = mergeProps(componentStyles, componentProps);
  const dimensions = mergeProps(
    // eslint-disable-next-line solid/reactivity
    { width: mergedProps.width, height: mergedProps.height },
    dimensionProps,
    layoutSize
  );

  return [mergedProps, dimensions];
}
