import SolidRow from './Row';
import Button from '../Button';

const meta = {
  title: 'Components/Row',
  component: SolidRow,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'items inside a Row',
      table: {
        defaultValue: { summary: '[]' }
      }
    },
    scrollType: {
      control: { type: 'radio' },
      options: ['lazyScroll', 'alwaysScroll', 'neverScroll'],
      description: 'determines when to scroll',
      table: {
        defaultValue: { summary: false }
      }
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'the focus will loop back to the beginning of the list after reaching the last item',
      table: {
        defaultValue: { summary: false }
      }
    }
  }
};

export default meta;

// create an array of buttons to use in Row
const createItems = length => {
  return Array.from({ length }).map((_, i) => {
    const button = (
      <Button width={300} height={100}>
        Button {i + 1}
      </Button>
    );
    return button;
  });
};

const buttons = () => <>{createItems(7)}</>;

export const LazyScroll = {
  render: args => {
    return <SolidRow {...args}>{buttons}</SolidRow>;
  },
  args: {
    children: buttons,
    scrollType: 'lazyScroll',
    wrap: false
  }
};

// export const AlwaysScroll = {
//   render: args => {
//     return <SolidRow {...args}>{buttons}</SolidRow>;
//   },
//   args: {
//     children: buttons,
//     scrollType: 'alwaysScroll',
//     wrap: false
//   }
// };

// export const NeverScroll = {
//   render: args => {
//     return <SolidRow {...args}>{buttons}</SolidRow>;
//   },
//   args: {
//     children: buttons,
//     scrollType: 'neverScroll',
//     wrap: false
//   }
// };

// export const ScrollIndex = {
//   render: args => {
//     return <SolidRow {...args}>{buttons}</SolidRow>;
//   },
//   args: {
//     children: buttons,
//     scrollIndex: 4,
//     wrap: false
//   }
// };
