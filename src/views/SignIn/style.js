import styled from 'styled-components';
import { Primary } from '@assets/styles/colors';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const PageWrapper = styled.div`
  border: 1px solid ${Primary};
  padding: 40px 32px;
`;

export const LogoWrapper = styled.div`
  width: 236px;
  margin: 0 auto 40px;
  pointer-events: none;
`;

export const Form = styled.form`
  width: 448px;
`;