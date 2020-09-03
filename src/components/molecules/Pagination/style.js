import styled from 'styled-components';
import { lighten } from 'polished';
import { Primary } from '@assets/styles/colors';

export const Container = styled.div`
  width: ${props => `calc(42px + 42px + ${props.pageCount * 36}px)`};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  user-select: none;

  .pagination__chevron-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: .3s;
    outline: none;

    &:hover {
      background: ${lighten(0.8, Primary)};
    }
    
    &:active {
      background: ${lighten(0.7, Primary)};
    }

    &.chevron-left {
      color: ${props => props.active === 1 ? lighten(0.5, Primary) : Primary};
      pointer-events: ${props => props.active === 1 ? 'none' : 'auto'};
    }

    &.chevron-right {
      color: ${props => props.active === props.pageCount ? lighten(0.5, Primary) : Primary};
      pointer-events: ${props => props.active === props.pageCount ? 'none' : 'auto'};
      transform: rotate(180deg);
    }
  }

  .pagination__page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin: 0 2px;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s;
    outline: none;

    &.active {
      border: 1px solid ${Primary}
    }

    &:hover {
      background: ${lighten(0.8, Primary)};
    }

    &:active {
      background: ${lighten(0.7, Primary)};
    }
  }
`;

export default Container;