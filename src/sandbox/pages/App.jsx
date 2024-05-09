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
import { Tile, Metadata, Label, Badge } from '@lightningjs/solid-ui';
import TileDynamic from '../../packages/solid/components/Tile/TileDynamic';
import TileSlotsOnMount from '../../packages/solid/components/Tile/TileSlotsOnMount';
import { useFocusManager } from '@lightningjs/solid-primitives';
import theme from 'theme';

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';

const App = () => {
  useFocusManager({
    Menu: 'm',
    Text: 't',
    Buttons: 'b'
  });

  return (
    <View ref={window.APP} width={1920} height={1080} color={theme.color.grey}>
      <View display="flex" flexDirection="row" gap={20} x={theme.layout.gutterX} y={theme.layout.gutterX}>
        <Tile
          artwork={{ src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg' }}
          topLeft={<Badge title="HD" />}
          topRight={<Label width={75} title="Label" />}
          inset={<View width={theme.spacer.lg * 5} height={theme.spacer.xxl + theme.spacer.md} />}
          bottom={<Metadata title="props" description={lorum} />}
          persistentMetadata
        />
        <TileDynamic
          artwork={{ src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg' }}
          topLeft={props => <Badge {...props} title="HD" />}
          topRight={props => <Label {...props} width={75} title="Label" />}
          inset={props => (
            <View
              {...props}
              src={'../../assets/images/Xfinity-Provider-Logo-2x1.png'}
              width={theme.spacer.lg * 5}
              height={theme.spacer.xxl + theme.spacer.md}
            />
          )}
          bottom={props => <Metadata {...props} title="dynamic" description={lorum} />}
          persistentMetadata
        />
        <TileSlotsOnMount
          artwork={{ src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg' }}
          persistentMetadata
        >
          {/* <Badge title="HD" slot="top-left" /> */}
          {/* <Label width={75}/ title="Label" slot="top-right" /> */}
          <View width={theme.spacer.lg * 5} height={theme.spacer.xxl + theme.spacer.md} slot="bottom">
            <Text>bottom</Text>
          </View>
          <View width={theme.spacer.lg * 5} height={theme.spacer.xxl + theme.spacer.md} slot="inset">
            <Text>inset</Text>
          </View>
          {/* <Metadata title="slots" description={lorum} slot="bottom" /> */}
        </TileSlotsOnMount>
      </View>
    </View>
  );
};

export default App;
