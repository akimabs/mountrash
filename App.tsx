import React from 'react';

import Private from './src/routes/';
import {StatusBar} from 'react-native';

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Private />
    </>
  );
}

export default App;
