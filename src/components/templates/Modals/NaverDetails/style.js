import styled from 'styled-components'
import { Primary, White } from '@assets/styles/colors'
import { ParagraphBold } from '@assets/styles/typography'
import { lighten } from 'polished';

export const DetailsWrapper = styled.div`
  display: flex;
  min-height: 504px;

  .figure-wrapper {
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
  filter: grayscale(100%);
  object-fit: cover;
  vertical-align: middle;
  width: 503px;
  height: 504px;
`;