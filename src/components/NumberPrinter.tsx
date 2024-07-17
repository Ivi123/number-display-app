import React from 'react';

interface NumberPrinterProps {
  maxNumber: number;
  onMaxNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberPrinter: React.FC<NumberPrinterProps> = ({ maxNumber, onMaxNumberChange }) => {
  return (
    <div className="number-printer">
      <label>Max Number to Print</label>
      <input type="number" value={maxNumber || ''} onChange={onMaxNumberChange} />
      <div>
        The printed numbers:
        {maxNumber > 0 && Array.from({ length: maxNumber }, (_, i) => i + 1).join(', ')}
      </div>
    </div>
  );
};

export default NumberPrinter;
