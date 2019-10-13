import React from 'react';

import { useAppContext } from 'context/AppContext';

import {
  Content,
  Rectangle,
  Wrapper
} from './styles';

export const Output: React.FC = () => {
  const { state: { backgroundColor, borderRadius, fontSize } } = useAppContext();

  return (
    <Wrapper>
        <Rectangle
          borderRadius={borderRadius}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
        >
          <Content>Output</Content>          
        </Rectangle>
    </Wrapper>
  );
};
