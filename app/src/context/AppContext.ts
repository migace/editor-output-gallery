import React from 'react';
import { Range } from 'react-input-range';

export interface IAppContext {
  color: string;
  borderRadius: number | Range;
  fontSize: number;
  updateColor: (color: string) => void;
  updateBorderRadius: (radius: number) => void;
  updateFontSize: (fontSize: number) => void;
}

export const AppContext = React.createContext<Partial<IAppContext>>({});
