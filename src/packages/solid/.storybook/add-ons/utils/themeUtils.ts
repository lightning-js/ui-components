/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
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

// utility functions specifically used for storybook add-ons

// Component Styles Panel and Theme Picker
export const globalContext = () =>
  document &&
  document.querySelector('iframe') &&
  document.querySelector('iframe').contentWindow &&
  document.querySelector('iframe').contentWindow.CONTEXT;

// Component Styles Panel, Theme Panel, Theme Picker
export const globalTheme = () => {
  const context = globalContext();
  return context && context.theme;
};
// Theme Picker
export function setGlobalTheme(theme, updateGlobals) {
  document &&
    document.querySelector('iframe') &&
    document.querySelector('iframe').contentWindow &&
    document.querySelector('iframe').contentWindow.postMessage({ theme });
  if (updateGlobals) updateGlobals({ LUITheme: theme });
}
