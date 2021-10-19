import styled, { css } from 'styled-components'
import media from '../../styles/media'
import Parallax from '../../helpers/parallax'
import AsteriskIcon from '../../icons/asterisk.svg'
import BarsIcon from '../../icons/faq/bars.svg'
import UnionIcon from '../../icons/faq/union.svg'

export const Container = styled.section`
  margin-bottom: 40px;

  ${media.greaterThan('md')`
    margin-bottom: 100px;
  `}
`

export const BarHeader = styled.div`
  display: none;
  position: relative;

  ${media.greaterThan('md')`
    display: block;
  `}

  .bar {
    width: 100%;
    height: 40px;
  }

  .square {
    position: absolute;
    top: 0;
    width: 92px;
    height: 92px;

    &:nth-child(1) {
      left: 0;
      background: url(${UnionIcon}) no-repeat center center;
      background-size: contain;
    }

    &:nth-child(2) {
      left: 92px;
      background: url(${BarsIcon}) no-repeat center center;
      background-size: contain;
    }

    &:nth-child(3),
    &:nth-child(4) {
      width: 64px;
      height: 64px;
    }

    &:nth-child(3) {
      top: 40px;
      right: 0;
    }

    &:nth-child(4) {
      top: 104px;
      right: 64px;
    }
  }

  .triangles {
    display: flex;
    align-items: center;
    position: absolute;
    top: 40px;
    right: 63px;
    width: 174px;
    height: 64px;
    transform: rotate(180deg);

    svg {
      width: 58px;
      height: 64px;
    }
  }
`

export const Wrapper = styled.div`
  ${media.greaterThan('md')`
    padding-top: 52px;
  `}

  ${media.greaterThan('lg')`
    display: flex;
    flex-wrap: wrap;
  `}
`

export const Header = styled.header`
  margin-bottom: 40px;

  ${media.greaterThan('lg')`
    width: 100%;
    margin-bottom: 90px;
  `}

  h2 {
    position: relative;
    text-transform: uppercase;
    line-height: 96px;

    ${media.greaterThan('lg')`
      line-height: 128px;
    `}

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: -18px;
      width: 96px;
      height: 96px;
      background: url(${AsteriskIcon}) no-repeat;
      background-size: contain;
      transform: translateY(-50%);

      ${media.greaterThan('lg')`
        width: 128px;
        height: 128px;
      `}
    }

    span {
      position: relative;
      z-index: 2;
    }
  }
`

export const Column = styled.div`
  margin-bottom: 30px;

  ${media.greaterThan('lg')`
    margin-bottom: 0;
    width: 40%;
    padding-right: 40px;
  `}
`

export const Text = styled(Parallax)`
  &:not(:last-child) {
    margin-bottom: 40px;

    ${media.greaterThan('lg')`
      margin-bottom: 80px;
    `}
  }

  h3 {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.blue.light};

    ${media.greaterThan('lg')`
      font-size: 32px;
    `}
  }

  p {
    font-weight: 500;

    ${media.greaterThan('lg')`
      font-size: 20px;
      line-height: 32px;
    `}
  }
`

export const ButtonDownload = styled.a`
  display: inline-block;
  height: 64px;
  padding: 0 30px;
  margin-top: 20px;
  line-height: 64px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;

  ${media.greaterThan('lg')`
    &:hover {
      opacity: 0.8;
    }
  `}
`

export const ButtonMore = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue.light};
  color: ${({ theme }) => theme.colors.blue.light};

  ${media.greaterThan('lg')`
    font-size: 20px;

    &:hover {
      opacity: 0.8;
    }
  `}
`

export const Items = styled.div`
  ${media.greaterThan('lg')`
    width: 60%;
  `}
`

export const Item = styled(Parallax)`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.green.light};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  ${media.greaterThan('lg')`
    padding: 30px 20px;
  `}
`

export const ItemTitle = styled.h4`
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.green.light};
  cursor: pointer;

  i {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 19px;
    height: 19px;
    transform: translateY(-50%);
    transition: all 300ms ease;

    ${(props) =>
      props.active &&
      css`
        transform: translateY(-50%) rotate(45deg);
      `}

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      background: ${({ theme }) => theme.colors.yellow.light};
      transform: translate(-50%, -50%);
    }

    &:before {
      width: 100%;
      height: 2px;
    }

    &:after {
      width: 2px;
      height: 100%;
    }
  }

  ${media.greaterThan('lg')`
    font-size: 20px;
    line-height: 32px;
  `}
`

export const ItemText = styled.div`
  padding-top: 20px;
`
