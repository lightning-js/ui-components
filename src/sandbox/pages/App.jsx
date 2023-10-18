import { View } from '@lightningjs/solid';
import { ProgressBar } from '@lightningjs/solid-ui';
import { Icon } from '@lightningjs/solid-ui';

const App = () => {
  return (
    <View ref={window.APP} style={{ width: 1920, height: 1080 }}>
      <View color="#071423" />
      <ProgressBar x={200} y={400} width={500} progress={0.6} />
      <Icon/>
    </View>
  );
};

export default App;
