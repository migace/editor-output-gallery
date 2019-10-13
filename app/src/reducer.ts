import { IState } from 'context/AppContext';
import {
  UPDATE_BACKGROUND_COLOR,
  UPDATE_BORDER_RADIUS,
  UPDATE_FONT_SIZE,
  ActionsType,
} from './actions'

export type ReducerType = (state: IState, action: ActionsType) => IState;

export const reducer: ReducerType = (state: IState, action) => {
  switch (action.type) {
    case UPDATE_BACKGROUND_COLOR:
      return { ...state, backgroundColor: action.backgroundColor };
    case UPDATE_BORDER_RADIUS:
      return { ...state, borderRadius: action.borderRadius };
    case UPDATE_FONT_SIZE:
      return { ...state, fontSize: action.fontSize };
    default:
      return state;
  }
};
