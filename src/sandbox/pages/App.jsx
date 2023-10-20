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
import { ProgressBar } from '@lightningjs/solid-ui';
const App = () => {
  useFocusManager({
    m: 'Menu',
    t: 'Text',
    b: 'Buttons'
  });
  return (
    <View ref={window.APP} style={{ width: 1920, height: 1080 }}>
      <View color="#071423" />
      <ProgressBar x={200} y={400} width={500} progress={0.6} zIndex={1} />
      <Column>
        <Button autofocus x={200} y={200} height={100} width={500}>
          <Text style={{ ...buttonStyles.Text, textAlign: 'center' }}>Button!</Text>
        </Button>
        <Button
          // autofocus
          x={200}
          y={400}
          height={100}
          width={800}
          prefix={
            <Text width={10} style={fixStyles}>
              #
            </Text>
          }
          title="A Different Button Button Button!"
          suffix={
            <Text width={10} style={fixStyles}>
              @
            </Text>
          }
        />
      </Column>
    </View>
  );
};

export default App;
