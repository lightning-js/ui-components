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

import { ElementNode } from '@lightningjs/solid';
import type { KeyHandler } from '@lightningjs/solid-primitives';
import { assertTruthy } from './index.js';

export function onGridFocus(elm: ElementNode) {
  if (!elm || elm.selected === undefined) return;
  let child = elm.children[elm.selected];
  while (child?.skipFocus) {
    elm.selected++;
    child = elm.children[elm.selected];
  }
  if (!(child instanceof ElementNode)) return;
  child.setFocus();
}

export function handleNavigation(direction: 'up' | 'right' | 'down' | 'left'): KeyHandler {
  return function () {
    const numChildren = this.children.length;
    const wrap = this.wrap;
    const lastSelected = this.selected || 0;

    if (numChildren === 0) {
      return false;
    }

    if (direction === 'right' || direction === 'down') {
      do {
        this.selected = ((this.selected || 0) % numChildren) + 1;
        if (this.selected >= numChildren) {
          if (!wrap) {
            this.selected = undefined;
            break;
          }
          this.selected = 0;
        }
      } while (this.children[this.selected]?.skipFocus);
    } else if (direction === 'left' || direction === 'up') {
      do {
        this.selected = ((this.selected || 0) % numChildren) - 1;
        if (this.selected < 0) {
          if (!wrap) {
            this.selected = undefined;
            break;
          }
          this.selected = numChildren - 1;
        }
      } while (this.children[this.selected]?.skipFocus);
    }

    if (this.selected === undefined) {
      this.selected = lastSelected;
      if (this.children[this.selected].states!.has('focus')) {
        // This child is already focused, so bubble up to next handler
        return false;
      }
    }
    const active = this.children[this.selected];
    assertTruthy(active instanceof ElementNode);
    this.onSelectedChanged && this.onSelectedChanged.call(this, this, active, this.selected, lastSelected);

    if (this.plinko && lastSelected !== undefined) {
      // Set the next item to have the same selected index
      // so we move up / down directly
      const lastSelectedChild = this.children[lastSelected];
      assertTruthy(lastSelectedChild instanceof ElementNode);
      const num = lastSelectedChild.selected || 0;
      active.selected = num < active.children.length ? num : active.children.length - 1;
    }
    active.setFocus();
    return true;
  };
}
