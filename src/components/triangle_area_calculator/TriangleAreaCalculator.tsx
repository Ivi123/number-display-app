import React from 'react';
import { calculateArea } from '../../utils/calculations';
import './TriangleAreaCalculator.css';

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
      <input
        id="height-input"
        type="number"
        value={height}
        onChange={onHeightChange}
        min="0"
        step="1"
      />
      <label htmlFor="width-input">Width</label>
      <input
        id="width-input"
        type="number"
        value={width}
        onChange={onWidthChange}
        min="0"
        step="1"
      />
      <div>
        The calculated area of the triangle is: {calculateArea(height, width)}
      </div>
    </div>
  );
};

export default TriangleAreaCalculator;