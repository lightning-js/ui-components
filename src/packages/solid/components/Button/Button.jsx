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

/**
 * Primary UI component for user interaction
 */

import { View, Text, hexColor } from '@lightningjs/solid';
import theme from 'theme';

const styles = {
  container: {
    width: 386,
    height: 136,
    color: hexColor(theme.color.black[0]),
    alpha: theme.alpha.alpha3,
    borderRadius: 30,
    border: { width: 5, color: 0xee6d04ff },
    scale: 1,
    focus: {
      color: [0x58807dff, { duration: 2000 }],
      scale: 1.2,
      border: { width: 5, color: 0xff0000ff },
      alpha: [1, { duration: 1500, delay: 200, timing: 'easy-in' }]
    },
    active: {
      color: 0x33ff55ff
    },
    disabled: {
      alpha: 1
    }
  }
};

styles.text = {
  fontSize: 32,
  lineHeight: styles.container.height,
  contain: 'width',
  textAlign: 'center',
  mountY: -0.35,
  color: 0xf6f6f9ff,
  height: styles.container.height,
  width: styles.container.width,
  focus: {
    fontSize: 64
  }
};

export default function Button(props) {
  return (
    <View {...props} forwardStates animate style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}
