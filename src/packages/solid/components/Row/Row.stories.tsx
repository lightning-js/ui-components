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
    lazyScroll: {
      control: { type: 'boolean' },
      description:
        'if true, will only scroll the row if the item is off screen and `alwaysScroll` and `neverScroll` are both false.',
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

export const Basic = {
  render: args => {
    return <SolidRow {...args}>{buttons}</SolidRow>;
  },
  args: {
    children: buttons,
    lazyScroll: true,
    wrap: false
  }
};
