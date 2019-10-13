import styled from 'styled-components';

export interface IRectangleProps {
  borderRadius: number;
  backgroundColor: string;
  fontSize: number;
}

export const Rectangle = styled.div<IRectangleProps>`
  border-radius: ${props => props.borderRadius}px;
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.fontSize}px;
  padding-top: 56.25%;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
`;
