import { ColorResult } from 'react-color';

export type ColorPickerProps = {
  color: string;
  handleChangeComplete: (color: ColorResult) => void;
}
