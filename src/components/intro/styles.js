import styled, { css } from 'styled-components'
import media from '../../styles/media'
import Parallax from '../../helpers/parallax'
import PlanetSVG from '../../icons/intro/planet.svg'
import BallsSVG from '../../icons/intro/balls.svg'
import ExplosionSVG from '../../icons/intro/explosion.svg'
import MenImg from '../../images/intro.png'

export const Container = styled.div`
  position: relative;
  margin-bottom: 40px;

  ${media.greaterThan('md')`
    margin-bottom: 80px;
  `}
`

export const Wrapper = styled.div``

export const Header = styled.header`
  background-color: #f2f3f7;
  background-image: url(${MenImg});
  background-position: bottom;
  background-repeat: no-repeat;
  padding-left: 60px;
  padding-bottom: 60px;
  margin-bottom: 30px;
  background-size: 395px;
  background-position-x: 90%;

  @media (max-width: 1449px) {
    background-size: 490px;
    background-position-x: 85%;
  }

  @media (max-width: 1328px) {
    background-size: 480px;
    background-position-x: 80%;
  }

  @media (max-width: 1302px) {
    background-size: 523px;
    background-position-x: 80%;
  }
  @media (max-width: 1200px) {
    background-size: contain;
    background-position-x: 100% !important;
  }
  @media (max-width: 920px) {
    background-image: none;
    padding-bottom: 0px;
  }
`

export const Logo = styled(Parallax)`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;

  svg {
    width: 280px;
    height: 31px;

    ${media.greaterThan('sm')`
      width: 460px;
      height: 50px;
    `}

    ${media.greaterThan('lg')`
      width: 557px;
      height: 61px;
    `}
  }

  p {
    position: absolute;
    bottom: -30px;
    right: 0;
    display: inline-block;
    font-size: 28px;
    line-height: 28px;
    font-weight: 500;
    font-style: italic;
    color: ${({ theme }) => theme.colors.blue.light};

    ${media.greaterThan('lg')`
      bottom: -80px;
      font-size: 64px;
      line-height: 78px;
    `}
  }
`

export const Title = styled(Parallax)`
  width: 220px;
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.colors.blue.light};

  ${media.greaterThan('lg')`
    width: 100%;
    font-size: 56px;
    line-height: 56px;

    span {
      display: block;
    }
  `}

  strong {
    display: none;
  }
`

export const Description = styled(Parallax)`
  font-weight: 500;
  width: 50%;
  padding: 100px 5%;

  @media (max-width: 1999px) {
    padding: 100px 5%;
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`

export const Columns = styled.div`
  ${media.greaterThan('lg')`
    display: flex;
    justify-content: space-between;
  `}
`

export const Column = styled(Parallax)`
  position: relative;

  ${media.lessThan('lg')`
    /* &:not(:last-child) {
      margin-bottom: 30px;
    } */

    &:first-child {
      display: none;
    }
  `}

  ${media.greaterThan('lg')`
    &:first-child {
      width: 45%;
    }

    &:last-child {
      width: 45%;
    }
  `}
`

export const Contents = styled.div`
  position: relative;
`

export const Content = styled.article`
  ${media.lessThan('lg')`
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  `}

  ${media.greaterThan('lg')`
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;

    &:not(:first-child) {
      position: absolute;
      top: 0;
      left: 0;
    }

    ${(props) =>
      props.active &&
      css`
        opacity: 1;
        visibility: visible;
      `}
  `}
`

export const Numbers = styled.div`
  position: relative;
  margin: 0 auto;

  ${media.greaterThan('lg')`
    margin-bottom: 50px;
  `}

  p {
    position: absolute;
    padding: 0 10px;
    font-size: 16px;
    line-height: 20px;
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blue.light};
    text-align: center;

    ${media.greaterThan('sm')`
      font-size: 24px;
      line-height: 28px;
    `}
  }

  span {
    display: block;
    margin: 10px 0;
    font-size: 38px;

    ${media.greaterThan('sm')`
      margin: 20px 0;
      font-size: 72px;
    `}
  }

  ${(props) =>
    !props.index &&
    css`
      width: 317px;
      height: 160px;
      background: url(${ExplosionSVG}) no-repeat;
      background-size: contain;

      ${media.greaterThan('sm')`
        width: 555px;
        height: 280px;
      `}

      p {
        top: 50%;
        left: 50%;
        width: 130px;
        transform: translate(-50%, -50%);

        ${media.lessThan('sm')`
          font-size: 14px;
        `}

        ${media.greaterThan('sm')`
          width: 240px;
          padding: 0 30px;
        `}
      }

      i {
        position: relative;
        top: -13px;
        font-size: 18px;

        ${media.greaterThan('sm')`
          top: -30px;
          font-size: 24px;
        `}
      }

      sup {
        position: absolute;
        top: -10px;
        left: -5px;
        font-size: 14px;

        ${media.greaterThan('sm')`
          top: -10px;
          left: -5px;
          font-size: 18px;
        `}
      }
    `}

  ${(props) =>
    props.index === 1 &&
    css`
      width: 317px;
      height: 160px;
      background: url(${BallsSVG}) no-repeat;
      background-size: contain;

      ${media.greaterThan('sm')`
        width: 555px;
        height: 280px;
      `}

      p {
        top: 50%;
        right: 0;
        width: 160px;
        transform: translateY(-50%);

        ${media.greaterThan('sm')`
          width: 280px;
          padding: 0 30px;
        `}
      }
    `}

  ${(props) =>
    props.index === 2 &&
    css`
      width: 282px;
      height: 160px;
      background: url(${PlanetSVG}) no-repeat;
      background-size: contain;

      ${media.greaterThan('sm')`
        width: 555px;
        height: 315px;
      `}

      p {
        top: 43%;
        left: 50%;
        width: 160px;
        transform: translate(-50%, -50%);

        ${media.lessThan('sm')`
          font-size: 14px;
        `}

        ${media.greaterThan('sm')`
          width: 280px;
          padding: 0 30px;
          top: 45%;
        `}
      }

      span {
        ${media.lessThan('sm')`
          font-size: 30px;
        `}
      }
    `}
`

export const Text = styled.div`
  margin-top: 20px;

  ${media.greaterThan('lg')`
    &.rich-text {
      font-size: 16px;
    }
  `}

  p,
  li {
    font-weight: 500;
  }

  ul {
    padding-left: 20px;
    list-style: inside;
  }
`

export const TextFeatured = styled.div`
  ${media.greaterThan('lg')`
    padding-top: 80px;
    position: relative;
    z-index: 2;
  `}

  h3 {
    margin-bottom: 30px;

    ${media.greaterThan('lg')`
      max-width: 550px;
    `}
  }
`

export const ButtonFeatured = styled(Parallax)`
  position: relative;
  margin-left: -10px;
  margin-right: -10px;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.light};
  line-height: 24px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(180deg, #f5c913 0%, #f5a413 100%);
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;
  }

  strong {
    position: relative;
    display: block;
    z-index: 2;
    font-weight: 600;
  }

  ${(props) =>
    props.active &&
    css`
      &:after {
        opacity: 1;
        visibility: visible;
      }
    `}

  ${media.greaterThan('sm')`
    margin-left: -20px;
    margin-right: -20px;
    padding: 20px;
  `}

  ${media.greaterThan('lg')`
    font-size: 20px;
    line-height: 32px;
  `}
`

export const Squares = styled.div`
  display: none;

  ${media.greaterThan('lg')`
    display: block
  `}

  div {
    position: absolute;
    width: 80px;
    height: 80px;
  }

  ${({ position }) =>
    !position &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 160px;
      height: 80px;

      div {
        top: 0;

        &:nth-child(2) {
          left: 80px;
        }
      }
    `}

  ${({ position }) =>
    position === 1 &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      width: 330px;
      height: 160px;

      div {
        top: 0;

        &:nth-child(1) {
          top: 80px;
        }

        &:nth-child(2) {
          width: 250px;
          left: 80px;
        }
      }
    `}

  ${({ position }) =>
    position === 2 &&
    css`
      position: absolute;
      bottom: 0;
      left: -40px;
      width: 240px;
      height: 160px;

      div {
        bottom: 0;

        &:nth-child(1) {
          bottom: 80px;
        }

        &:nth-child(2) {
          left: 80px;
        }

        &:nth-child(3) {
          left: 160px;
        }
      }
    `}

  ${({ position }) =>
    position === 3 &&
    css`
      position: absolute;
      top: 0;
      right: -40px;
      width: 160px;
      height: 160px;

      div {
        bottom: 0;

        &:nth-child(1) {
          bottom: 80px;
        }

        &:nth-child(2) {
          left: 80px;
        }
      }
    `}

  ${({ position }) =>
    position === 4 &&
    css`
      position: absolute;
      bottom: -200px;
      right: 0;
      width: 160px;
      height: 160px;

      div {
        top: 0;
        left: 0;

        &:nth-child(1) {
          left: 80px;
        }

        &:nth-child(2) {
          top: 80px;
        }

        &:nth-child(3) {
          top: 80px;
          left: 80px;
        }
      }
    `}
`
