import styled from 'styled-components';
import { lighten } from 'polished';
import { Primary, White } from '@assets/styles/colors';
import { LabelMedium } from '@assets/styles/typography';

const colorSchemas = {
  primary: {
    background: Primary,
    hoverBackground: lighten(0.1, Primary),
    color: White,
  },
  secondary: {
    background: White,
    hoverBackground: lighten(0.1, White),
    color: Primary,
  }
};

export const StyledButton = styled.button`
  width: 100%;
  background: ${props => colorSchemas[props.colorSchema].background};
  padding: 8px;
  border: 1px solid ${Primary};
  outline: none;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: ${props => colorSchemas[props.colorSchema].hoverBackground}
  }

  &:active {
    background: ${props => colorSchemas[props.colorSchema].background};
    transition: none;
  }

  span {
    ${LabelMedium};
    color: ${props => colorSchemas[props.colorSchema].color};
  }
`;

export default StyledButton;