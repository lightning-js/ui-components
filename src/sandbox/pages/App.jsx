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
import { Button } from '../../packages/solid';
// import {} from '@lightningjs/solid-ui';

const App = () => {
  return (
    // eslint-disable-next-line solid/style-prop
    <View ref={window.APP} style={{ width: 1920, height: 1080 }}>
      <View color="#071423" />
      <Button width={100} height={100} title="ShaynaText" />
    </View>
  );
};

export default App;
