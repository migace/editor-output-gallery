import React from 'react';
import { Range } from 'react-input-range';

export type AppContextProps = {
  color: string;
  border: number | Range;
  fontSize: number;
};

export const AppContext = React.createContext<Partial<AppContextProps>({});
