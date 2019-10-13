export const UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE';
export const UPDATE_BORDER_RADIUS = 'UPDATE_BORDER_RADIUS';
export const UPDATE_BACKGROUND_COLOR = 'UPDATE_BACKGROUND_COLOR';

export interface IUpdateFontSizeAction {
  type: typeof UPDATE_FONT_SIZE,
  fontSize: number;
}

export interface IUpdateBorderRadiusAction {
  type: typeof UPDATE_BORDER_RADIUS,
  borderRadius: number;
}

export interface IUpdateBackgroundColorAction {
  type: typeof UPDATE_BACKGROUND_COLOR,
  backgroundColor: string;
}

export type ActionsType = 
  | IUpdateFontSizeAction
  | IUpdateBorderRadiusAction
  | IUpdateBackgroundColorAction
