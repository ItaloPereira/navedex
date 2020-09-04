import styled from 'styled-components';
import { lighten } from 'polished';
import { HeadingSmall } from '@assets/styles/typography';
import { Primary } from '@assets/styles/colors';

export const PageWrapper = styled.div`
  max-width: 592px;
  margin: 0 auto;

  .page-container {
    margin-top: 40px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  .page-header__icon-wrapper {
    font-size: 25px;
    margin-right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    color: ${Primary};

    &:hover {
      background: ${lighten(0.8, Primary)};
    }
  }

  .page-header__title {
    ${HeadingSmall}
  }
`;

export const Form = styled.form`
  .form__line {
    display: flex;
    justify-content: space-between;
  }

  .form__col {
    width: 280px;
  }

  .form__button-wraper {
    width: 176px;
    margin-left: auto;
  }
`;