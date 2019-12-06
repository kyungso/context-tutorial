import React from 'react';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
