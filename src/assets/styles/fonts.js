import { createGlobalStyle } from 'styled-components';

const MontserratRegularWoff2 = '/static/fonts/text/montserrat-regular-webfont.woff2';
const MontserratRegularWoff = '/static/fonts/text/montserrat-regular-webfont.woff';

const MontserratSemiboldWoff2 = '/static/fonts/text/montserrat-semibold-webfont.woff2';
const MontserratSemiboldWoff = '/static/fonts/text/montserrat-semibold-webfont.woff';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegularWoff2}) format('woff2'), url(${MontserratRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiboldWoff2}) format('woff2'), url(${MontserratSemiboldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;

export default Fonts;