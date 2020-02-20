import { css, createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import { appTypography, appGrayColors, appBorderRadius, appTextIndents } from '.';

const reset = css`
  html {
    box-sizing: border-box;
    line-height: 1.15;
    text-size-adjust: 100%;
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  body {
    margin: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  p,
  pre,
  dl,
  dd,
  ol,
  ul,
  figure,
  hr,
  fieldset,
  legend {
    margin: 0;
    padding: 0;
  }

  li,
  ol {
    padding: 0;
    list-style: none;
  }

  button {
    color: inherit;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    border: none;
    font-weight: inherit;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    margin: 0;
  }

  figcaption,
  figure,
  main {
    display: block;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
    text-decoration-skip: objects;
    color: inherit;
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: 'Lato', sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    display: inline-block;
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }

  details,
  menu {
    display: block;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap');

  ${reset}

  html {
    font-family: 'Lato', sans-serif;
    ${appTypography.text.normal};
  }

  /* Data picker styles */
  .react-datepicker__input-container > input{
    border: 1px solid ${appGrayColors.black20};
    height: ${rem('30px')};
    border-radius: ${appBorderRadius.base};
    text-align: center;
  }
`;
