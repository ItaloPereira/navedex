import styled from 'styled-components';
import { LabelMedium } from '@assets/styles/typography';

export const Viewport = styled.div`
  padding: 0 32px;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 146px;
`;

export const Logout = styled.span`
  ${LabelMedium}
  display: block;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
