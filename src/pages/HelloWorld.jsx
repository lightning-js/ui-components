import { Text } from '@lightningjs/solid';
import styles from '../styles';

const HelloWorld = () => {
  return <>
      <Text autofocus style={styles.headlineText}>Hello World!</Text>
      <Text style={styles.headlineSubText}>
        Press B for buttons, T for Text pages, M for here
      </Text>
    </>
};

export default HelloWorld;
