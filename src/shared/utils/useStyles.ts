/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { mergeProps, splitProps } from 'solid-js';
import { useItemLayout } from './useItemLayout';

// eslint-disable-next-line solid/reactivity, @typescript-eslint/no-explicit-any
export function useStyles(componentProps: any, componentStyles: any) {
  // TODO add types
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
