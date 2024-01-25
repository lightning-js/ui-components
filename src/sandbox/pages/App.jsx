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

import { View, Text } from '@lightningjs/solid';
import { Button } from '@lightningjs/solid-ui';
import { getHexColor } from 'utils';
import { useFocusManager, Column } from '@lightningjs/solid-primitives';

const App = () => {
  useFocusManager({
    Menu: 'm',
    Text: 't',
    Buttons: 'b'
  });

  return (
    <View ref={window.APP} width={1280} height={720} color={getHexColor('#071423')}>
      <Column y={200}>
        <Button tone="brand" y={400}>
          Title
        </Button>
      </Column>
    </View>
  );
};

export default App;
