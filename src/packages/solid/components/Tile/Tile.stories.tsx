import type { Meta, StoryObj } from 'storybook-solidjs';
import Tile from './Tile.jsx';
import theme from 'theme';
import Badge from '../Badge/Badge.jsx';
import { View } from '@lightningjs/solid';
import Label from './Label.jsx';
import Metadata from '../Metadata/Metadata.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

type Story = StoryObj<typeof Tile>;
const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';

const meta: Meta<typeof Tile> = {
  title: 'Components/Tile',
  tags: ['autodocs'],
  component: Tile,
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

export const MetadataInset: Story = {
  render: args => {
    return (
      <Tile
        {...args}
        topLeft={<Badge title="HD" />}
        topRight={<Label width={75} title="Label" mountX={0.5} />}
        inset={
          <>
            <View
              src={'../../assets/images/Xfinity-Provider-Logo-2x1.png'}
              width={theme.spacer.lg * 5}
              height={theme.spacer.xxl + theme.spacer.md}
            />
            <Metadata debug title="Title" description={lorum} maxLines={1} />
          </>
        }
      />
    );
  },
  args: {
    states: 'focus',
    width: 480,
    height: 270,
    artwork: {
      src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
      effects: {
        linearGradient: {
          angle: 3.14,
          stops: [0, 0.5],
          colors: [theme.color.black, 0x00000000]
        }
      }
    },
    persistentMetadata: true,
    metadata: {
      title: 'Title',
      description: lorum,
      maxLines: 1
    },
    progressBar: {
      progress: 0.5
    }
  }
};

export const MetadataStandard: Story = {
  render: args => {
    return (
      <Tile
        {...args}
        topLeft={<Badge title="HD" />}
        topRight={<Label width={75} title="Label" mountX={0.5} />}
        inset={
          <View
            src={'../../assets/images/Xfinity-Provider-Logo-2x1.png'}
            width={theme.spacer.lg * 5}
            height={theme.spacer.xxl + theme.spacer.md}
          />
        }
        bottom={<Metadata title="Title" description={lorum} maxLines={1} />}
      />
    );
  },
  args: {
    states: 'focus',
    width: 480,
    height: 270,
    artwork: {
      src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
    },
    persistentMetadata: true,
    metadata: {
      title: 'Title',
      description: lorum,
      maxLines: 1
    },
    progressBar: {
      progress: 0.5
    }
  }
};

export const TileBadgeLabelSwitch: Story = {
  render: args => {
    return (
      <Tile
        {...args}
        topLeft={<Label width={75} title="Label" />}
        topRight={<Badge title="HD" />}
        inset={
          <View
            src={'../../assets/images/Xfinity-Provider-Logo-2x1.png'}
            width={theme.spacer.lg * 5}
            height={theme.spacer.xxl + theme.spacer.md}
          />
        }
        bottom={<Metadata title="Title" description={lorum} maxLines={1} />}
      />
    );
  },
  args: {
    states: 'focus',
    width: 480,
    height: 270,
    artwork: {
      src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
    },
    persistentMetadata: true,
    metadata: {
      title: 'Title',
      description: lorum,
      maxLines: 1
    },
    progressBar: {
      progress: 0.5
    }
  }
};

export const TileLogoCheckBoxTop: Story = {
  render: args => {
    return (
      <Tile
        {...args}
        topLeft={
          <View
            src={'../../assets/images/Xfinity-Provider-Logo-2x1.png'}
            width={theme.spacer.lg * 5}
            height={theme.spacer.xxl + theme.spacer.md}
          />
        }
        topRight={<Checkbox />}
        inset={<Metadata title="Title" description={lorum} maxLines={1} />}
      />
    );
  },
  args: {
    states: 'focus',
    width: 480,
    height: 270,
    artwork: {
      src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
      effects: {
        linearGradient: {
          angle: 3.14,
          stops: [0, 0.5],
          colors: [theme.color.black, 0x00000000]
        }
      }
    },
    persistentMetadata: true,
    metadata: {
      title: 'Title',
      description: lorum,
      maxLines: 1
    },
    progressBar: {
      progress: 0.5
    }
  }
};

export const TileProgressBarTop: Story = {
  render: args => {
    return (
      <Tile
        {...args}
        topLeft={<ProgressBar progress={0.5} width={380} />}
        inset={
          <>
            <Metadata description={lorum} maxLines={1} mountY={0.5} />
            <View
              src={'../../assets/images/Xfinity-Provider-Logo-2x1.png'}
              width={theme.spacer.lg * 5}
              height={theme.spacer.xxl + theme.spacer.md}
            />
          </>
        }
      />
    );
  },
  args: {
    states: 'focus',
    width: 480,
    height: 270,
    artwork: {
      src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
      effects: {
        linearGradient: {
          angle: 3.14,
          stops: [0, 0.5],
          colors: [theme.color.black, 0x00000000]
        }
      }
    },
    persistentMetadata: true,
    metadata: {
      title: 'Title',
      description: lorum,
      maxLines: 1
    }
  }
};

export default meta;
