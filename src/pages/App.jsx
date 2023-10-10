import { Route, Routes, useNavigate } from "@solidjs/router";
import { View } from "@lightningjs/solid";
import { useFocusManager } from "@lightningjs/solid-primitives";
import HelloWorld from './HelloWorld';
import TextPage from './Text';
import ButtonsPage from './ButtonsPage';
import NotFound from './NotFound';

const App = () => {
  useFocusManager({
    m: 'Menu',
    t: 'Text',
    b: 'Buttons',
  });
  const navigate = useNavigate();

  return (
    <View ref={window.APP}
      onLast={() => history.back()}
      onText={() => navigate('/text')}
      onButtons={() => navigate('/buttons')}
      onMenu={() => navigate('/')} style={{ width: 1920, height: 1080 }}>
      <View color="#071423" />
      <Routes>
        <Route path="/" component={HelloWorld} />
        <Route path="/text" component={TextPage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/*all" component={NotFound} />
      </Routes>
    </View>
  )
};

export default App;
