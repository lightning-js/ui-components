/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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

/* eslint-disable @typescript-eslint/ban-types */
// take an array of functions and if you return true from a function, it will stop the chain
export const chainFunctions = (...args: (Function | undefined)[]) => {
  const onlyFunctions = args.filter(func => typeof func === 'function') as Function[];
  if (onlyFunctions.length === 0) {
    return undefined;
  }

  return function (...innerArgs: unknown[]) {
    for (const func of onlyFunctions) {
      if (func.apply(this, innerArgs) === true) {
        return true;
      }
    }
  };
};
