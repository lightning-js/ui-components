// @ts-expect-error TODO why aren't we seeing solid-js's types
import { mergeProps, splitProps } from 'solid-js';
import { useItemLayout } from './useItemLayout';

export function useStyles(componentProps: any, componentStyles: any) {
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
