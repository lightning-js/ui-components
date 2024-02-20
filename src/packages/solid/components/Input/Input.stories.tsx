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

import Input from './Input.jsx';
import type { Meta, StoryObj } from 'storybook-solidjs';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import { hexColor } from '@lightningjs/solid';
import { createSignal } from 'solid-js';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'color of Input',
      control: 'color'
    },
    height: {
      description: 'height of Input',
      control: 'number'
    },
    width: {
      description: 'width of Input',
      control: 'number'
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    }
  }
};

export default meta;

export const Basic: Story = {

  render: args => {
    let inputContainer;

    let handleKeyPress = (e) => {
      if (e.key.length ===  1) {
        if (!inputContainer.actualTitle || inputContainer.actualTitle === '') {
          inputContainer.actualTitle = e.key;
          inputContainer.position=1;
        } else {
          inputContainer.actualTitle= inputContainer.actualTitle.slice(0,inputContainer.position) + e.key +  inputContainer.actualTitle.slice(inputContainer.position,inputContainer.actualTitle.length - 1);
          inputContainer.position++;
        }
    } else if (e.key === 'Backspace') {
      inputContainer.actualTitle = inputContainer.actualTitle.slice(0, inputContainer.actualTitle.length - 1);
      inputContainer.position = inputContainer.position === 0 ? 0 : inputContainer.position - 1;
    }
    setTitle(inputContainer.actualTitle);
  }
  
    const [title, setTitle] = createSignal(args.actualTitle);

    return <Input autofocus {...args} onKeyPress={handleKeyPress} keySignal={[title, setTitle]} ref={inputContainer}/>;
  },
  args: {
    eyebrow: "eyebrow",
    helpText: "helpText",
    width: 100,
    height: 100,
    actualTitle: '',
    position: 0
  }
};
