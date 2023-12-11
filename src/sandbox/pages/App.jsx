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

import { View } from '@lightningjs/solid';
import { Button } from '@lightningjs/solid-ui';
import { getHexColor } from 'utils';
import { useFocusManager, Column } from '@lightningjs/solid-primitives';

const App = () => {
  let ColumnRef;

  useFocusManager({
    Menu: 'm',
    Text: 't',
    Buttons: 'b'
  });

  return (
    // eslint-disable-next-line solid/style-prop
    <View ref={window.APP} style={{ width: 1920, height: 1080 }}>
      <View color={getHexColor('#071423')} />
      <Column ref={ColumnRef}>
        <Button autofocus y="200" x="300">
          Title
        </Button>
        <Button tone="brand" y="400" x="300">
          Title Two
        </Button>
        <Button y="600" x="300">
          Title Three
        </Button>
      </Column>
    </View>
  );
};

export default App;
