import styled, { css } from 'styled-components'
import media from '../../styles/media'

export const Container = styled.header`
  height: 65px;

  ${media.greaterThan('md')`
    height: 94px;
  `}
`

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  z-index: 100;

  ${media.greaterThan('md')`
    padding-top: 8px;
    padding-bottom: 0;
  `}
`

export const LogoButton = styled.a`
  ${media.greaterThan('md')`
    position: relative;
    top: -4px;
  `}

  svg {
    width: 61px;
    height: 32px;

    ${media.greaterThan('md')`
      width: 91px;
      height: 48px;
    `}
  }
`

export const Nav = styled.nav`
  ${media.lessThan('md')`
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    padding: 40px 20px 20px 20px;
    height: calc(100vh - 65px);
    background: #0b0040;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;

    ${(props) =>
      props.active &&
      css`
        opacity: 1;
        visibility: visible;
      `}
  `}

  ul {
    ${media.greaterThan('md')`
      display: flex;
      align-items: center;
    `}
  }

  li {
    ${media.lessThan('md')`
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    `}

    ${media.greaterThan('md')`
      &:not(:last-child) {
        margin-right: 10px;
      }
    `}

    ${media.greaterThan('lg')`
      width: 160px;

      &:last-child {
        width: 180px;
      }

      &:not(:last-child) {
        margin-right: 24px;
      }
    `}

    ${media.greaterThan('xl')`
      &:not(:last-child) {
        margin-right: 130px;
      }
    `}
  }

  a {
    display: block;
    position: relative;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    &:after {
      content: '';
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #f5c913 0%, #f5a413 100%);
      z-index: 1;
      transition: all 300ms ease;

      ${media.greaterThan('md')`
        display: block;
        opacity: 0;
        visibility: hidden;
      `}
    }

    strong {
      position: relative;
      z-index: 2;
      display: block;
      font-weight: 600;
    }

    ${media.greaterThan('md')`
      padding: 0 10px;
      height: 86px;
      line-height: 82px;

      &:hover {
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }
    `}

    ${media.greaterThan('lg')`
      padding: 0;
      font-size: 16px;
      text-align: center;
    `}
  }
`

export const ToggleButton = styled.button`
  display: block;
  position: relative;
  margin-left: auto;
  width: 32px;
  height: 20px;
  font-size: 0;

  ${media.greaterThan('md')`
    display: none;
  `}

  i,
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: all 300ms ease;
  }

  &:after {
    top: auto;
    bottom: 0;
  }

  i {
    top: 50%;
    transform: translateY(-50%);
  }

  ${(props) =>
    props.active &&
    css`
      &:before,
      &:after {
        top: 9px;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }

      i {
        visibility: hidden;
        opacity: 0;
        transition-duration: 150ms;
      }
    `}
`

export const Subscription = styled.div`
  ${media.lessThan('md')`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
    transition: all 300ms ease;

    ${(props) =>
      props.active &&
      css`
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      `}
  `}

  ${media.greaterThan('md')`
      position: relative;
      top: -4px;
  `}
`

export const SubscriptionButton = styled.a`
  display: block;
  height: 46px;
  padding: 0 30px;
  line-height: 46px;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  white-space: nowrap;

  ${media.greaterThan('md')`
    height: 64px;
    line-height: 64px;
  `}

  ${media.greaterThan('lg')`
    padding: 0 40px;

    &:hover {
      opacity: 0.8;
    }
  `}
`
