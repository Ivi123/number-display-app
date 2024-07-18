import React from 'react';
import './NumberPrinter.css';

interface NumberPrinterProps {
  maxNumber: number;
  onMaxNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberPrinter: React.FC<NumberPrinterProps> = ({ maxNumber, onMaxNumberChange }) => {
  return (
    <div className="number-printer">
      <label htmlFor="max-number-input">Max Number to Print</label>
      <input
        id="max-number-input"
        type="number"
        value={maxNumber}
        onChange={onMaxNumberChange}
        min="0"
        step="1"
      />
      <div>
        The printed numbers:
        {maxNumber && Array.from({ length: maxNumber }, (_, i) => i + 1).join(', ')}
      </div>
    </div>
  );
};

export default NumberPrinter;
