import React, { useState } from 'react';
import InputRange, { Range } from 'react-input-range';

import '../../../../../node_modules/react-input-range/lib/css/index.css';

interface RangePickerProps {
  max?: number;
  min?: number;
  defaultValue?: number | Range;
}

export const RangePicker: React.FC<RangePickerProps> = ({ max = 20, min = 0, defaultValue = 0 }) => {
  const [value, setValue] = useState(defaultValue);

  function handleInputChange(newValue: number | Range) {
    setValue(newValue);
  }

  return (
    <InputRange
      maxValue={max}
      minValue={min}
      value={value}
      onChange={handleInputChange} />
  );
};
