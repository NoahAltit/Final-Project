import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* background-color: #050503; */
    color: #fff;
    /* font-family: "Raleway", sans-serif; */
    font-family: "Montserrat", sans-serif;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      background-image: linear-gradient(63deg, #48378e, #849cfd 100%);
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  h1,
h2,
h3,
label,
button {
  color: #fff;
  font-family: var(--font-heading);
  font-size: 32px;
  text-align: center;
}
p,
a,
li,
blockquote,
input {
  font-family: var(--font-body);
}

  input {
    font-size: 24px;
    height: 42px;
    border: 2px solid var(--color-orange);
    border-radius: 4px;
    padding: 0 12px;
  }



  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% );
  }

  ::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% );
  }
`;
