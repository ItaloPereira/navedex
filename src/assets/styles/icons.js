import { createGlobalStyle } from 'styled-components';

const icomoonEot = '/static/fonts/icon/icomoon.eot';
const icomoonTtf = '/static/fonts/icon/icomoon.ttf';
const icomoonWoff = '/static/fonts/icon/icomoon.woff';
const icomoonSvg = '/static/fonts/icon/icomoon.svg';

const icons = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url(${icomoonEot}?tfua8h);
    src:  url(${icomoonEot}?tfua8h#iefix) format('embedded-opentype'),
      url(${icomoonTtf}?tfua8h) format('truetype'),
      url(${icomoonWoff}?tfua8h) format('woff'),
      url(${icomoonSvg}?tfua8h#icomoon) format('svg');
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
  .icon-logo:before {
    content: "\\e904";
  }
`

export default icons;