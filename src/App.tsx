import React, { useState } from 'react';
import './App.css';
import NumberPrinter from './components/number_printer/NumberPrinter';
import TriangleAreaCalculator from './components/triangle_area_calculator/TriangleAreaCalculator';

const App: React.FC = () => {
  const [maxNumber, setMaxNumber] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [width, setWidth] = useState<number | ''>('');

  const handleMaxNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxNumber(e.target.value === '' ? '' : Number(e.target.value));
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value === '' ? '' : Number(e.target.value));
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value === '' ? '' : Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Number Printer and Area Calculator App</h1>
      <div className="content">
        <NumberPrinter maxNumber={maxNumber === '' ? 0 : maxNumber} onMaxNumberChange={handleMaxNumberChange} />
        <TriangleAreaCalculator
          height={height === '' ? 0 : height}
          width={width === '' ? 0 : width}
          onHeightChange={handleHeightChange}
          onWidthChange={handleWidthChange}
        />
      </div>
    </div>
  );
};

export default App;
