import Button from '../components/Button';
import { Row } from '@lightningjs/solid-primitives';

const ButtonsPage = () => {
  function onEnter(event, elm) {
    this.states.toggle('disabled');
  }

  const RowStyles = {
    display: 'flex',
    justifyContent: 'flexStart',
    width: 1500,
    height: 300,
    color: '00000000',
    gap: 26,
    y: 400,
    x: 100
  }

  return (
    <Row style={RowStyles}>
      <Button autofocus onEnter={onEnter}>Focused</Button>
      <Button states={{ active: true, disabled: false }}>Normal</Button>
      <Button states='disabled'>Disabled</Button>
    </Row>
  );
};

export default ButtonsPage;
