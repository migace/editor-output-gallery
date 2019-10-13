import React from 'react';
import { ColorResult } from 'react-color';

import { useAppContext } from 'context/AppContext';
import {
  UPDATE_BACKGROUND_COLOR,
  UPDATE_BORDER_RADIUS,
  UPDATE_FONT_SIZE
} from 'actions';

import { ColorPicker } from './components/ColorPicker';
import { RangePicker } from './components/RangePicker';
import { EditorWrapper, Header } from './styles';

export const Editor: React.FC = () => {
  const {state: {backgroundColor, borderRadius, fontSize}, dispatch} = useAppContext();

  const updateColor = (color: ColorResult) => dispatch({
    type: UPDATE_BACKGROUND_COLOR,
    backgroundColor: color.hex,
  });
  const updateBorderRadius = (borderRadius: number) => dispatch({
    type: UPDATE_BORDER_RADIUS,
    borderRadius
  });
  const updateFontSize = (fontSize: number) => dispatch({
    type: UPDATE_FONT_SIZE,
    fontSize,
  });

  return (    
    <EditorWrapper>
      <Header className="title is-3">Customize your dream rectangle:</Header>
      <div className="level">
        <div className="level-item">
          <ColorPicker
            color={backgroundColor}
            handleChangeComplete={updateColor!} />
        </div>
        <div className="level-item">
          <div>
            <Header className="title is-4">Border radius:</Header>
            <RangePicker 
              value={borderRadius}
              handleChange={updateBorderRadius}
              max={100}
            />
          </div>
        </div>
        <div className="level-item">
          <div>
            <Header className="title is-4">Font size:</Header>
            <RangePicker
              min={8}
              max={48}
              value={fontSize}
              handleChange={updateFontSize}
            />
          </div>
        </div>
      </div>
    </EditorWrapper>
  );
};
