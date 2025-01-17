import React from 'react';
import Counter from './src/screens/counter';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default App;
