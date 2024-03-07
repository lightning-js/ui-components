import Row from './Row.jsx';
import Button from '../Button/Button.jsx';
import { buttonStyles } from '../Button/index.js';

const meta = {
  title: 'Components/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'items inside a Row',
      table: {
        defaultValue: { summary: '[]' }
      }
    },
    scroll: {
      control: { type: 'radio' },
      options: ['auto', 'edge', 'always', 'none'],
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
const createItems = (length: number) => {
  return Array.from({ length }).map((_, i) => (
    <Button width={300} height={100} style={buttonStyles}>
      Button {i + 1}
    </Button>
  ));
};

const buttons = () => createItems(7);

export const Basic = {
  render: args => {
    return (
      <Row autofocus {...args}>
        {buttons}
      </Row>
    );
  },
  args: {
    children: buttons,
    wrap: false,
    height: 500,
    width: 800,
    x: 30
  }
};

export const edgeScroll = {
  render: args => {
    return (
      <Row autofocus {...args}>
        {buttons}
      </Row>
    );
  },
  args: {
    children: buttons,
    scroll: 'edge',
    wrap: false,
    height: 500,
    width: 800,
    x: 100
  }
};

export const AlwaysScroll = {
  render: args => {
    return (
      <Row autofocus {...args}>
        {buttons}
      </Row>
    );
  },
  args: {
    children: buttons,
    scroll: 'always',
    wrap: false,
    height: 500,
    width: 800,
    x: 0
  }
};

export const NoneScroll = {
  render: args => {
    return (
      <Row autofocus {...args}>
        {buttons}
      </Row>
    );
  },
  args: {
    children: buttons,
    scroll: 'none',
    wrap: false,
    height: 500,
    width: 800,
    x: 0
  }
};

export const ScrollIndex = {
  render: args => {
    return (
      <Row autofocus {...args}>
        {buttons}
      </Row>
    );
  },
  args: {
    children: buttons,
    scrollIndex: 4,
    wrap: false,
    height: 500,
    width: 800,
    x: 0
  }
};
