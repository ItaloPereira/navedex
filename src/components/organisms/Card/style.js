import styled from 'styled-components';
import { lighten } from 'polished';
import { LabelLarge, Paragraph } from '@assets/styles/typography';
import { Primary, White } from '@assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .image-container {
    cursor: pointer;
  }

  .card__img {
    width: 100%;
    filter: grayscale(100%);
    object-fit: cover;
    vertical-align: middle;
    height: 21.9vw;
    max-height: 437px;
  }

  .card__fallback {
    width: 100%;
    height: 21.9vw;
    max-height: 437px;
    background: ${lighten(0.3, Primary)};
    color: ${White};
    display: flex;
    align-items: center;
    justify-content: center;

    &__initials {
      font-size: 100px;
      font-weight: 600;
      letter-spacing: 10px;
    }
  }

  .card__title {
    ${LabelLarge}
    margin-top: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }

  .card__description {
    ${Paragraph}
    display: block;
    margin-top: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    margin-bottom: 10px;
  }

  .card__actions {
    display: flex;
    margin-top: auto;

    &__icon-wrapper {
      font-size: 24px;
      padding-right: 8px;
      cursor: pointer;
      outline: none;

      span {
        color: ${Primary};
        transition: .3s;

        :hover {
          color: ${lighten(0.3, Primary)};
        }
      }
    }
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 21.9vw;
  max-height: 437px;
  background: ${lighten(0.7, Primary)};
`;