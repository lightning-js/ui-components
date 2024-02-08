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

import type { ElementNode } from "@lightningjs/solid";

export function withScrolling(adjustment: number = 0) {
  return (componentRef: ElementNode, selectedElement: ElementNode, selected: number, lastSelected: number) => {
    if (componentRef.children.length === 0) {
      return;
    }

    const gap = componentRef.gap || 0;
    const scrollType = componentRef.scrollType;
    const [lastItem, windowVal] = updateLastIndex(componentRef);

    // values based on row or column
    const currentVal = componentRef.flexDirection === 'row' ? componentRef.x : componentRef.y;
    const newVal = componentRef.flexDirection === 'row' ? selectedElement.x : selectedElement.y;
    const size = componentRef.flexDirection === 'row' ? selectedElement.width : selectedElement.height;

    // TODO, find better name
    const direct = selected > lastSelected ? 'positive' : 'negative';

    let next = currentVal;

    /** scrollIndex takes precedence */
    // if we have a scrollIndex and it is valid
    if (componentRef.scrollIndex != undefined && componentRef.scrollIndex >= 0) {
      // if we are at an index on or after the scrollIndex
      if (componentRef.selected >= componentRef.scrollIndex) {
        if (direct === 'positive') {
          next = currentVal - size - gap;
        } else {
          next = currentVal + size + gap;
        }
      }

      /** want to scroll based on type */
    } else {
      // if we want to scroll based to the -x value of the selected
      // this will be the case for alwaysScroll, and lazyScroll when we are scrolling negatively and the current positioning does not have the selected item shown
      // if direction is negative and absolute value of current position is higher than the position we want to be at, the selected Item is not shown
      if (
        scrollType === 'alwaysScroll' ||
        (scrollType === 'lazyScroll' && direct === 'negative' && Math.abs(currentVal) > newVal)
      ) {
        next = -newVal + adjustment;

        // if we want to scroll based on the size of the selected item
        // this will be the case for lazyScroll when we are scrolling positively and the current positioning does not have the selected item shown
        // if direction is positive and (absolute value of current position + the size of the visual portion of the row) is less than (the position we want to be at + the size of the selected Item), the selected Item is not shown
      } else if (
        scrollType === 'lazyScroll' &&
        direct === 'positive' &&
        Math.abs(currentVal) + windowVal < newVal + size
      ) {
        next = currentVal - size - gap;
        // if we want to default scroll ( scroll until all the last component is show)
        // this will be the case when we have no scrollType (or an invalid one) and the lastItem is not shown (or selected is not shown)
        // if the (absolute value of current position  + the size of the visual portion of the row) is less than (the last Item position + the last Item size), then the last item is not shown
        // if scrolling backwards and the position of the selected item is less that the absolute value of the current position, the selected item is not shown
      } else if (
        scrollType !== 'lazyScroll' &&
        scrollType !== 'neverScroll' &&
        (Math.abs(currentVal) + windowVal < lastItem.position + lastItem.size ||
          newVal < Math.abs(currentVal))
      ) {
        next = -newVal + adjustment;
      }
    }

    // updating value if scrolling is needed
    if (componentRef.flexDirection === 'row' && componentRef.x !== next) {
      componentRef.x = next;
    } else if (componentRef.flexDirection === 'column' && componentRef.y !== next) {
      componentRef.y = next;
    }
  };
}

function updateLastIndex(items) {
  let lastItem, windowVal;
  if (items.flexDirection === 'row') {
    lastItem = {
      position: items.children[items.children.length - 1].x,
      size: items.children[items.children.length - 1].width
    };
    windowVal = items.width;
  } else {
    lastItem = {
      position: items.children[items.children.length - 1].y,
      size: items.children[items.children.length - 1].height
    };
    windowVal = items.height;
  }

  return [lastItem, windowVal];
}
