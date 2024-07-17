import React from 'react';
import { calculateArea } from '../utils/calculations';

interface TriangleAreaCalculatorProps {
  height: number;
  width: number;
  onHeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWidthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TriangleAreaCalculator: React.FC<TriangleAreaCalculatorProps> = ({ height, width, onHeightChange, onWidthChange }) => {
  return (
    <div className="triangle-area-calculator">
      <label htmlFor="height-input">Height</label>
      <input id="height-input" type="number" value={height} onChange={onHeightChange} />
      <label htmlFor="width-input">Width</label>
      <input id="width-input" type="number" value={width} onChange={onWidthChange} />
      <div>
        The calculated area is printed here: {calculateArea(height, width)}
      </div>
    </div>
  );
};

export default TriangleAreaCalculator;
