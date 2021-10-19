import styled from 'styled-components'
import media from '../../styles/media'
import Parallax from '../../helpers/parallax'

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;

  ${media.greaterThan('md')`
    padding-bottom: 120px;
  `}
`

export const Wrapper = styled.div``

export const Header = styled(Parallax)`
  margin-bottom: 30px;

  ${media.greaterThan('md')`
    margin-bottom: 90px;
  `}

  ${media.greaterThan('lg')`
    padding-left: 50px;
  `}
`

export const Video = styled(Parallax)`
  position: relative;
  width: 100%;
  margin: 0 auto;

  ${media.greaterThan('sm')`
    width: 540px;
  `}

  ${media.greaterThan('md')`
    width: 760px;
  `}

  ${media.greaterThan('lg')`
    width: 1130px;
  `}

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 140px;
    height: 140px;

    ${media.greaterThan('lg')`
      width: 280px;
      height: 280px;
    `}
  }

  &:before {
    top: -10px;
    left: -10px;
    background: linear-gradient(180deg, #00146f 0%, #0b0040 100%);

    ${media.greaterThan('sm')`
      top: -20px;
      left: -20px;
    `}

    ${media.greaterThan('md')`
      top: -40px;
      left: -40px;
    `}
  }

  &:after {
    right: -10px;
    bottom: -10px;
    background: linear-gradient(180deg, #c80050 0%, #9f0037 100%);

    ${media.greaterThan('sm')`
      right: -20px;
      bottom: -20px;
    `}

    ${media.greaterThan('md')`
      right: -40px;
      bottom: -40px;
    `}
  }

  iframe {
    position: relative;
    width: 100%;
    height: 220px;
    z-index: 2;

    ${media.greaterThan('sm')`
      height: 460px;
    `}

    ${media.greaterThan('lg')`
      height: 630px;
    `}
  }
`
