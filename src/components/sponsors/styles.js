import styled, { css } from 'styled-components'
import SVG from 'react-inlinesvg'
import media from '../../styles/media'
import Parallax from '../../helpers/parallax'

export const Container = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;

  ${media.greaterThan('md')`
    padding-top: 50px;
    padding-bottom: 100px;
  `}
`

export const Wrapper = styled.div``

export const Content = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;

    ${media.greaterThan('md')`
      margin-bottom: 60px;
    `};

    ${media.greaterThan('lg')`
      margin-bottom: 87px;
    `};
  }
`

export const Title = styled(Parallax)`
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};

  ${(props) =>
    props.sponsors &&
    css`
      font-size: 28px;
      line-height: 40px;
    `}

  ${media.greaterThan('md')`
    font-size: 30px;
    line-height: 40px;

    ${(props) =>
      props.sponsors &&
      css`
        font-size: 40px;
        line-height: 56px;
      `}
  `};

  ${media.greaterThan('lg')`
    margin-bottom: 60px;

    ${({ sponsors }) =>
      !sponsors &&
      css`
        margin-bottom: 10px;
      `}
  `};
`

export const List = styled.ul`
  ${media.lessThan('sm')`
    li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  `}

  img {
    width: auto;
    height: auto;
  }

  ${media.lessThan('sm')`
    svg {
      &.elo {
        width: 106px;
      }

      &.yapay {
        width: 142px;
      }

      &.netshowme {
        width: 189px;
        height: 50px;
        margin-left: -10px;
      }

      &.vindi {
        width: 92px;
      }
    }

    ${({ sponsors }) =>
      sponsors &&
      css`
        img,
        svg {
          height: 40px;
        }
      `}

    ${({ sponsors }) =>
      !sponsors &&
      css`
        img,
        svg {
          height: 20px;
        }
      `}
    `}

  ${media.greaterThan('sm')`
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 33.3%;
      height: 130px;
    }

    .yapay {
      width: 143px;
      height: 40px;
    }
  `}

  ${media.greaterThan('md')`
    li {
      width: 25%;

      ${({ sponsors }) =>
        !sponsors &&
        css`
          width: 20%;
        `}
    }
  `}

  ${media.greaterThan('lg')`
    li {
      &:hover {
        opacity: 0.6;
      }
    }
  `}

  ${media.greaterThan('xl')`
    li {
      width: 20%;
    }
  `}
`

export const HeaderBar = styled.div`
  width: 100%;
  height: 24px;
`

export const FooterBar = styled(SVG)`
  width: 100%;
  height: auto;
`

export const Square = styled(Parallax)`
  width: 32px;
  height: 32px;
  position: absolute;

  ${media.greaterThan('md')`
    width: 64px;
    height: 64px;
  `}

  ${({ position }) =>
    !position &&
    css`
      top: 0;
      right: 0;
    `}

  ${({ position }) =>
    position === 1 &&
    css`
      display: none;
      bottom: 0;
      left: 0;

      ${media.greaterThan('md')`
        display: block;
      `}
    `}

${({ position }) =>
    position === 2 &&
    css`
      display: none;
      bottom: 64px;
      right: 129px;

      ${media.greaterThan('md')`
        display: block;
      `}
    `}

${({ position }) =>
    position === 3 &&
    css`
      display: none;
      bottom: 64px;
      right: 64px;

      ${media.greaterThan('md')`
        display: block;
      `}
    `}

${({ position }) =>
    position === 4 &&
    css`
      display: none;
      bottom: 0;
      right: 0;

      ${media.greaterThan('md')`
        display: block;
      `}
    `}
`
