import React from 'react';
import { HuePicker } from 'react-color';

import { ColorPickerProps } from './types';

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, handleChangeComplete }) => (
  <HuePicker
    color={color}
    onChangeComplete={handleChangeComplete}
  />
);
