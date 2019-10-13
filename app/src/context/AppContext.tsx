import React, { 
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from 'react';

import { ReducerType } from 'reducer';
import { ActionsType } from 'actions';

export interface IState {
  backgroundColor: string;
  borderRadius: number;
  fontSize: number;
}

export interface IAppProviderProps {
  reducer: ReducerType;
  initialState: IState;
  children: ReactNode;
}

export interface IAppContext {
  dispatch: Dispatch<ActionsType>;
  state: IState;
}

const defaultAppContextValues = {
  state: {
    backgroundColor: '',
    borderRadius: 0,
    fontSize: 0
  },
  dispatch: () => {}
};

export const AppContext = createContext<IAppContext>(defaultAppContextValues);

export const AppProvider = ({reducer, initialState, children}: IAppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = (): IAppContext => useContext(AppContext);
