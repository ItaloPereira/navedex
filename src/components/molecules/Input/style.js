import styled from 'styled-components';
import { lighten } from 'polished';
import { Paragraph, LabelMediumHeight, LabelSmall } from '@assets/styles/typography';
import { Primary, Gray500, Error as ErrorColor, White } from '@assets/styles/colors';

export const Viewport = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  ${Paragraph}
  border: 1px solid ${props => props.error ? ErrorColor : Primary};
  background: ${props => props.error ? lighten(0.3, ErrorColor) : White};
  padding: 8px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  transition: .3s;

  &::placeholder {
    color: ${Gray500};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  cursor: pointer;

  span {
    display: block;
  }
`;

export const Label = styled.span`
  ${LabelMediumHeight}
  display: block;
  margin-bottom: 4px;
`;

export const Error = styled.span`
  ${LabelSmall}
  visibility: ${props => props.error ? 'visible' : 'hidden'};
  opacity: ${props => props.error ? '1' : '0'};
  position: absolute;
  bottom: ${props => props.error ? '-22px' : '-10px'};
  color: ${ErrorColor};
  display: block;
  transition: .3s cubic-bezier(.215,.61,.355,1);
`;