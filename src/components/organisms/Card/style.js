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
    position: relative;

    ${props => props.name === 'Italo Pereira' && `
      &:after {
        content: 'LENDÁRIO';
        width: 100px;
        height: 40px;
        background: linear-gradient(45deg,#F17C58,#E94584,#24AADB,#27DBB1,#FFDC18,#FF3706);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: 600% 100%;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
        color: ${White};
        font-weight: 600;
        text-shadow: 1px 1px 10px rgba(145, 150, 150, 1);
      }
    `}
  }

  @keyframes gradient {
    0% {background-position: 0%}
    100% {background-position: 100%}
  }

  .card__img {
    width: 100%;
    filter: ${props => props.name === 'Italo Pereira' ? 'none' : 'grayscale(100%)'};
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