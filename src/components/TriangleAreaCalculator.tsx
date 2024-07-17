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
      <label>Height</label>
      <input type="number" value={height || ''} onChange={onHeightChange} />
      <label>Width</label>
      <input type="number" value={width || ''} onChange={onWidthChange} />
      <div>
        The calculated area is printed here:
        {height > 0 && width > 0 && calculateArea(height, width)}
      </div>
    </div>
  );
};

export default TriangleAreaCalculator;
