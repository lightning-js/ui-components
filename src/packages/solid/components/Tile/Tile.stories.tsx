import type { Meta, StoryObj } from 'storybook-solidjs';
import Tile from './Tile';
import Checkbox from '../Checkbox/Checkbox';
import Badge from '../Badge/Badge';
import theme from 'theme';

type Story = StoryObj<typeof Tile>;

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
      control: { type: 'string' }
    },
    label: {
      description: 'Text to display in the foreground of the label',
      control: { type: 'string' }
    },
    badge: {
      description: 'object containing all the properties supported in the Badge component',
      title: {
        description: 'text inside of badge'
      },
      iconAlign: {
        control: 'select',
        options: ['none', 'left', 'right'],
        description: 'Side of the text the icon will appear on'
      },
      icon: {
        icon: {
          description: 'path to image or inline SVG XML'
        },
        color: {
          description: 'color of icon',
          control: 'color'
        }
      }
    },
    logo: {
      description: 'icon source',
      control: 'select',
      options: [undefined, '../../assets/images/Xfinity-Provider-Logo-2x1.png'],
      table: {
        defaultValue: { summary: undefined }
      }
    },
    metadataLocation: {
      description: 'Controls where metadata is positioned in relationship to the Tile',
      control: ['standard', 'inset'],
      table: {
        defaultValue: { summary: 'standard' }
      }
    },

    /*
    checkbox: {
      description: 'Object containing all properties supported in the Checkbox component',
      control: { type: 'string' }
    },
    circle: {
      description: 'Boolean changing format to circle if true',
      control: { type: 'boolean' }
    },
    // TODO change when metadata gets merged in
    metadata: {
      description: 'Object containing all properties supported in the [MetadataTile component]',
      control: { type: 'string' }
    },
    persistentMetadata: {
      description: 'Show metadata if exists regardless of focusState',
      control: { type: 'boolean' }
    },*/

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
    return <Tile {...args} />;
  },
  args: {
    width: 400,
    height: 240,
    artwork: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
    progressBar: {
      width: 300,
      height: theme.spacer.md,
      progress: 0.5,
      borderRadius: theme.radius.xs
    },
    badge: {
      title: 'HD'
    },
    label: {
      title: 'Label',
      width: 75
    },
    logo: '../../assets/images/Xfinity-Provider-Logo-2x1.png',
    metadataLocation: 'standard'
  }
};

export default meta;
