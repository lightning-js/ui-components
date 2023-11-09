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

import Button from '.';
import { render } from '../../test-utils';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
  it('renders', async () => {
    const tree = await render(() => <Button>Hello</Button>);
    console.log(tree.props);
    expect(tree).toMatchSnapshot();
  });

  describe('focus', () => {
    it('has a default unfocus text color', () => {});

    it('has a focus text color', () => {});

    it('should reset text color on unfocus', () => {});
  });

  describe('prefix', () => {
    it('should have a prefix if prefix array is passed to the button', () => {});

    it('should have items populated on Prefix row if prefix is passed', () => {});
  });

  describe('suffix', () => {
    it('should have a Suffix if suffix array is passed to the button', () => {});

    it('should have items populated on Prefix row if suffix is passed', () => {});

    it('Suffix should be positioned based on the title and prefix position', () => {});

    it('Suffix should be positioned horizontally at zero if title is empty', () => {});
  });
});
