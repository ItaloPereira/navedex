import styled from 'styled-components';
import { ParagraphLarge } from '@assets/styles/typography';

export const Body = styled.div`
  box-sizing: border-box;
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  p {
    ${ParagraphLarge}
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 29px;
  right: 29px;
  cursor: pointer;
  z-index: 90;
  font-size: 24px;
`;

export default Body;