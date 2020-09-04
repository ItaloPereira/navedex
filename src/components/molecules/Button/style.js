import styled from 'styled-components';
import { lighten, darken } from 'polished';
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
    hoverBackground: darken(0.05, White),
    color: Primary,
  }
};

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => colorSchemas[props.colorSchema].background};
  padding: 8px;
  border: 1px solid ${Primary};
  outline: none;
  cursor: pointer;
  transition: .3s;
  opacity: ${props => props.disabled ? '.7' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:hover {
    background: ${props => colorSchemas[props.colorSchema].hoverBackground}
  }

  &:active {
    background: ${props => colorSchemas[props.colorSchema].background};
    transition: none;
  }

  .loader {
    opacity: ${props => props.loading ? '1' : '0'};
    visibility: ${props => props.loading ? 'visible' : 'hidden'};
    margin-right: ${props => props.loading ? '10px' : '-16px'};
    display: inline-block;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
  }

  span {
    ${LabelMedium};
    color: ${props => colorSchemas[props.colorSchema].color};
  }
`;

export default StyledButton;