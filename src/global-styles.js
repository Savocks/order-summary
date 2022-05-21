import { createGlobalStyle } from 'styled-components';
import RedHatDisplay from './fonts/RedHatDisplay/RedHatDisplay-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Red Hat';
    src: url(${RedHatDisplay}) format('truetype');
  }
`;

export default GlobalStyle;
