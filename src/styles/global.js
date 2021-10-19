import { createGlobalStyle } from 'styled-components'
import media from './media'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, button, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
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
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* End RESET */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    outline:none;
    box-shadow: none;
  }

  html,
  body {
    width: 100%;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${media.greaterThan('sm')`
      font-size: 14px;
    `}
  }

  a {
    text-decoration: none;
    cursor: pointer;
    transition: all 300ms ease;
  }

  p,
  li {
    line-height: 1.5em;
  }

  img {
    display: block;
    width: 100%;
  }

  input {
    outline: none;
    border-radius: 0;
    -webkit-appearance: none;
  }

  button {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    border-radius: 0;
    -webkit-appearance: none;
  }

  button:focus {
    outline:none;
    box-shadow: none;
  }

  .container {
    padding-left: 20px;
    padding-right: 20px;

    ${media.greaterThan('sm')`
      padding-left: 40px;
      padding-right: 40px;
    `}
  }

  .headline-01 {
    font-size: 28px;
    font-weight: 600;
    line-height: 46px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.blue.light};

    ${media.greaterThan('lg')`
      font-size: 40px;
      line-height: 56px;
    `}
  }

  .rich-text {
    font-size: 14px;

    ${media.greaterThan('lg')`
      font-size: 20px;
    `}

    p,
    li {
      line-height: 24px;

      ${media.greaterThan('lg')`
        line-height: 32px;
      `}

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    a {
      color: ${({ theme }) => theme.colors.blue.light};
      text-decoration: underline;

      ${media.greaterThan('lg')`
        &:hover {
          color: ${({ theme }) => theme.colors.yellow.dark};
        }
      `}
    }

    ul {
      margin-bottom: 20px;
    }
  }

  .green-gradient {
    background: linear-gradient(180deg, #2AB332 0%, #2A6B32 100%);
  }

  .blue-gradient {
    background: linear-gradient(180deg, #00146F 0%, #0B0040 100%);
  }

  .pink-gradient {
    background: linear-gradient(180deg, #C80050 0%, #9F0037 100%);
  }

  .yellow-gradient {
    background: linear-gradient(180deg, #F5C913 0%, #F5A413 100%);
  }

  .slick-dots {
    position: relative;
    margin-top: 20px;
    bottom: 0;

    li {
      width: 10px;
      height: auto;

      button {
        width: 10px;
        height: 10px;
        margin: 0;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.blue.light};
        opacity: .4;
        transition: all 300ms ease;

        &:before {
          display: none;
        }
      }

      &.slick-active {
        button {
          opacity: 1;
        }
      }
    }
  }

  .ReactModal__Overlay.ReactModal__Overlay--after-open{
    z-index: 99999999 !important;
  }

  .Countdown {
    display: flex;
}

.Countdown-col-element .box {
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 50px;
color: #F5C913;
}
.Countdown-col-element span {
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 20px;
color: #F5C913;
}

.Countdown-col {
    padding: 10px;
    text-align-last: center;
}

.d-none{
  /* display: none; */
  -moz-animation-delay: 3.5s;
   -webkit-animation-delay: 3.5s;
   -o-animation-delay: 3.5s;
    animation-delay: 3.5s;
    transform: translateX(-100%);

}

`
