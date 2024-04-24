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

import type { Meta, StoryObj } from 'storybook-solidjs';
import CardContent from './CardContent.jsx';
import theme from 'theme';
import Badge from '../Badge/Badge.jsx';
import Label from '../Label/Label.jsx';
import Metadata, { type MetadataProps } from '../Metadata/Metadata.jsx';
import Details, { type DetailsProps } from '../Metadata/Details.jsx';

type Story = StoryObj<typeof CardContent>;
/** cspell: disable */
const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';
/** cspell: enable */

const meta: Meta<typeof CardContent> = {
  title: 'Components/CardContent',
  tags: ['autodocs'],
  component: CardContent,
  argTypes: {
    states: {
      control: { type: 'radio' },
      options: ['focus', 'unfocused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'focus' }
      }
    },
    artwork: {
      description: 'object containing all properties of the artwork background',
      control: { type: 'object' }
    },
    persistentMetadata: {
      description: 'Show metadata if exists regardless of focusState',
      control: { type: 'radio' },
      options: [true, false]
    },
    metadataColumnSpan: {
      description: 'sets the number of columns the metadata section spans',
      control: { type: 'number', step: 1, min: 0, max: 10 }
    },
    tileColumnSpan: {
      description: 'sets the number of columns the tile section spans',
      control: { type: 'number', step: 1, min: 0, max: 10 }
    },
    progressBar: {
      description: 'object containing all the properties supported in the ProgressBar component',
      color: {
        description: 'color of bar representing the total progress',
        control: 'color'
      },
      progressColor: {
        description: 'color of bar representing the current progress',
        control: 'color'
      },
      progress: {
        description: 'Percentage of current progress in a decimal format from 0 to 1',
        control: { type: 'number', step: 0.1, min: 0, max: 1.0 }
      },
      borderRadius: {
        description: 'Radius of the bar',
        control: { type: 'number', step: 1, min: 0, max: 50 }
      }
    }
  }
};

export const Basic: Story = {
  render: args => {
    return (
      <CardContent
        {...args}
        topLeft={<Badge title="HD" />}
        topRight={<Label width={75} title="Label" mountX={0.5} />}
        metadataTop={
          <>
            <Metadata {...(args.metadata as MetadataProps)} tone="brand" />
          </>
        }
        metadataBottom={
          <>
            <Details {...(args.details as DetailsProps)} tone="brand" />
          </>
        }
      />
    );
  },
  args: {
    autofocus: true,
    artwork: {
      src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
      effects: {
        linearGradient: {
          angle: 3.14,
          stops: [0, 0.5],
          // @ts-expect-error colors can be strings but type expects numbers
          colors: [theme.color.black, 0x00000000]
        }
      }
    },
    shouldCollapse: false,
    metadata: {
      title: 'Title',
      description: lorum,
      maxLines: 1
    },
    details: {
      title: 'Support text'
    },
    progressBar: {
      progress: 0.5
    },
    tileColumnSpan: 3,
    metadataColumnSpan: 3
  }
};

export default meta;
