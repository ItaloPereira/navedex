import styled from 'styled-components'
import { Primary, White } from '@assets/styles/colors'
import { ParagraphBold } from '@assets/styles/typography'
import { lighten } from 'polished';

export const DetailsWrapper = styled.div`
  display: flex;
  min-height: 504px;

  .figure-wrapper {
    position: relative;

    ${props => props.name === 'Italo Pereira' && `
      &:after {
        content: 'LENDÁRIO';
        width: 160px;
        height: 50px;
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
        font-size: 24px;
      }
    `}

    @keyframes gradient {
      0% {background-position: 0%}
      100% {background-position: 100%}
    }

    .figure__fallback {
      background: ${lighten(0.2, Primary)};
      color: ${White};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 503px;
      height: 504px;

      &__initials {
        font-size: 100px;
        font-weight: 600;
        letter-spacing: 10px;
      }
    }
  }
`

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 21px 27px 30px;
  width: 100%;
  position: relative;

  header {
    margin-bottom: 24px;

    h2 {
      margin-bottom: 10px;
    }
  }
  .naver-informations {
    list-style-type: none;

    li {
      margin-bottom: 24px;
      display: flex;
      flex-flow: column wrap;

      strong {
        ${ParagraphBold}
        margin-bottom: 10px;
      }
    }
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 21px;
  right: 21px;
  cursor: pointer;
  z-index: 90;
  font-size: 24px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  font-size: 24px;
  
  div {
    cursor: pointer;

    &:first-child {
      margin-right: 8px;
    }

    span {
      transition: .3s;

      &:hover {
        color: ${lighten(0.3, Primary)};
      }
    }
  }
`
export const NaverImg = styled.img`
  vertical-align: middle;
  filter: ${props => props.name === 'Italo Pereira' ? 'none' : 'grayscale(100%)'};
  object-fit: cover;
  vertical-align: middle;
  width: 503px;
  height: 504px;
`;