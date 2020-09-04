import styled from 'styled-components';
import { HeadingLarge, ParagraphExtraLarge } from '@assets/styles/typography';

export const PageWrapper = styled.div`
  padding: 0 32px;
  max-width: 1920px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-header__title {
    ${HeadingLarge}
  }

  .page-header__button-wrapper {
    width: 176px;
  }
`;

export const NaversContainer = styled.div`
  margin-top: 32px;
`;

export const PaginationWrapper = styled.div`
  margin: 32px auto 0;
`;

export const EmptyMessage = styled.span`
  ${ParagraphExtraLarge}
  display: block;
  text-align: center;
`;

export const LostPicture = styled.img`
  position: absolute;
  right: -25px;
  bottom: 0px;
  width: 50px;
  height: 50px;
  filter: blur(5px);
  transition: .3s;
  cursor: pointer;

  &:hover {
    filter: blur(1.5px);
    right: 0px;
  }
`;