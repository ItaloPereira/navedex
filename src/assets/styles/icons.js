import { createGlobalStyle } from 'styled-components';

const icomoonEot = '/static/fonts/icon/icomoon.eot';
const icomoonTtf = '/static/fonts/icon/icomoon.ttf';
const icomoonWoff = '/static/fonts/icon/icomoon.woff';
const icomoonSvg = '/static/fonts/icon/icomoon.svg';

const icons = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url(${icomoonEot}?yzjf54);
    src:  url(${icomoonEot}?yzjf54#iefix) format('embedded-opentype'),
      url(${icomoonTtf}?yzjf54) format('truetype'),
      url(${icomoonWoff}?yzjf54) format('woff'),
      url(${icomoonSvg}?yzjf54#icomoon) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-eye-block:before {
    content: "\\e904";
  }
  .icon-eye:before {
    content: "\\e905";
  }
  .icon-close:before {
    content: "\\e900";
  }
  .icon-chevron-left:before {
    content: "\\e901";
  }
  .icon-delete:before {
    content: "\\e902";
  }
  .icon-edit:before {
    content: "\\e903";
  }
`

export default icons;