import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TriangleAreaCalculator from './TriangleAreaCalculator';
import { act } from 'react';

test('renders TriangleAreaCalculator component', () => {
  render(<TriangleAreaCalculator height={0} width={0} onHeightChange={() => {}} onWidthChange={() => {}} />);
  expect(screen.getByLabelText('Height')).toBeInTheDocument();
  expect(screen.getByLabelText('Width')).toBeInTheDocument();
});

test('calculates and displays the area of a triangle', () => {
  render(<TriangleAreaCalculator height={10} width={5} onHeightChange={() => {}} onWidthChange={() => {}} />);
  expect(screen.getByText('The calculated area is printed here: 25')).toBeInTheDocument();
});

test('calls onHeightChange and onWidthChange when inputs change', () => {
  const handleHeightChange = jest.fn();
  const handleWidthChange = jest.fn();

  render(<TriangleAreaCalculator height={0} width={0} onHeightChange={handleHeightChange} onWidthChange={handleWidthChange} />);

  act(() => {
    fireEvent.change(screen.getByLabelText('Height'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Width'), { target: { value: '5' } });
  });

  expect(handleHeightChange).toHaveBeenCalledTimes(1);
  expect(handleWidthChange).toHaveBeenCalledTimes(1);
});
