import Tile from './Tile';
import theme from 'theme';

const meta = {
  title: 'Components/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    artwork: {
      description: 'object containing all properties of the artwork background',
      control: { type: 'string' }
    },
    badge: {
      description: 'object containing all the properties supported in the Badge component',
      control: { type: 'string' }
    },
    // TODO change when checkbox gets merged in
    checkbox: {
      description: 'Object containing all properties supported in the Checkbox component',
      control: { type: 'string' }
    },
    circle: {
      description: 'Boolean changing format to circle if true',
      control: { type: 'boolean' }
    },
    label: {
      description: 'Text to display in the foreground of the label',
      control: { type: 'string' }
    },
    metadataLocation: {
      description: 'Controls where metadata is positioned in relationship to the Tile',
      control: ['standard', 'inset']
    },
    // TODO change when metadata gets merged in
    metadata: {
      description: 'Object containing all properties supported in the [MetadataTile component]',
      control: { type: 'string' }
    },
    persistentMetadata: {
      description: 'Show metadata if exists regardless of focusState',
      control: { type: 'boolean' }
    },

    ProgressBar: {
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

export default meta;

export const Basic = {
  args: {
    width: 400,
    height: 240,
    progressBar: {
      progress: 0.5,
      // TODO make it so we don't need to do this
      color: theme.color.fillNeutralSecondary[0],
      progressColor: theme.color.fillBrand[0],
      borderRadius: theme.radius.xs
    }
  }
};
