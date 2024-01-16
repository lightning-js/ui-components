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

import type { Meta, StoryObj } from 'storybook-solidjs';
import KeyBoard from './KeyBoard.jsx';
import { Text } from '@lightningjs/solid';
import KeyBoardStyles from './KeyBoard.styles.js';
import Key from '../Key/Key.jsx';

type Story = StoryObj<typeof KeyBoard>;

const meta: Meta<typeof KeyBoard> = {
  title: 'Components/KeyBoard',
  tags: ['autodocs'],
  component: KeyBoard,
  argTypes: {
    states: {
      control: { type: 'radio' },
      options: ['focus', 'unfocused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'focus' }
      }
    }
  }
};

/**
 * 
 * each direct child represents a keyboard the user can toggle between. Within each child (separate keyboard options)
 * are groups of children. Each group represents the keys are are going to be in one row.
 * Keys are passed in, rows and columns are generated in the KeyBoard
 * 
 * Pros:
 * - user can pass in a specific key type that would be used ??? (is this possible? possible in L2 lui5)
 * - user can easily adjust specific key sizes
 * 
 * Cons:
 * - unsure if we can have a key to be able to toggle between the children (uppercase vs lowercase)- is this even needed in L3?
 * - user has to create every Key (more work)
 * 
 */
export const Possibility1: Possibility1 = {
  render: args => {
    return 
    <KeyBoard>
        <> // key: upperCase

            /** insert top line multiple keys not just A and B */
            <> 
            <Key>
                <Text>A</Text>
            </Key>
            <Key>
                <Text>B</Text>
            </Key>
            </>

            /** insert next line multiple keys not just C and D*/
            <> 
            <Key>
                <Text>C</Text>
            </Key>
            <Key>
                <Text>D</Text>
            </Key>
            </>

            /** etc */
        </>


        <> // key: lowerCase

            /** insert top line multiple keys not just a and b */
            <> 
            <Key>
                <Text>a</Text>
            </Key>
            <Key>
                <Text>b</Text>
            </Key>
            </>

            /** insert next line multiple keys not just c and d*/
            <> 
            <Key>
                <Text>c</Text>
            </Key>
            <Key>
                <Text>d</Text>
            </Key>
            </>

            /** etc */
        </>

    </Keyboard>;
  },
  args: {
    states: 'focus'
  }
};


/**
 * 
 * each direct child represents a keyboard the user can toggle between. Within each child (separate keyboard options)
 * are is a nested list of keyContent with each inner list representing a row
 * symbols (or objects with key props) are passed in, keys, rows, and columns are generated in the KeyBoard
 * 
 * 
 * Pros:
 * - easier for the user
 * - if passing an object, must contain key props
 * 
 * Cons:
 * - unsure if we can have a key to be able to toggle between the children (uppercase vs lowercase)- is this even needed in L3?
 * - All keys will use the Key component (lui5 L3 allows for possibility of custom Keys)
 *      - this can be combatted by adding an extra prop maybe?
 * - passing in different types can get confusing
 */
export const Possibility2: Story = {
    render: args => {
      return 
      <KeyBoard>

      <> // key: upperCase
        [ ['A','B'],['C', 'D']]
      </>
  
      <> // key: lowerCase
        [ ['a','b'],[{size: 'md', title: 'c'}, 'd']]
      </>
      
      </Keyboard>;
    },
    args: {
      states: 'focus'
    }
  };

export default meta;
