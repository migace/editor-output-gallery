import React from 'react';
import InputRange, { Range } from 'react-input-range';

import '../../../../../node_modules/react-input-range/lib/css/index.css';

interface RangePickerProps {
  max?: number;
  min?: number;
  value?: number | Range;
  handleChange: (value: number) => void;
}

export const RangePicker: React.FC<RangePickerProps> = ({ max = 20, min = 0, value = 0, handleChange }) => {
  function handleInputChange(newValue: number | Range) {
    handleChange(newValue as number);
  }

  return (
    <InputRange
      maxValue={max}
      minValue={min}
      value={value}
      onChange={handleInputChange} />
  );
};
