import styled from 'styled-components';
import { lighten } from 'polished';
import { Primary } from '@assets/styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 22.75% 22.75% 22.75% 22.75%;
  column-gap: 3%;

  .loading-item {
    &__img {
      width: 100%;
      height: 18vw;
      max-height: 437px;
      margin-bottom: 8px;
      background: ${lighten(0.7, Primary)};
    }

    &__line {
      width: 100%;
      height: 20px;
      margin-bottom: 8px;
      background: ${lighten(0.7, Primary)};

      &.w40 {
        width: 40%
      }

      &.w60 {
        width: 60%
      }

      &.w80 {
        width: 80%
      }
    }
  }
`;

export default Container;