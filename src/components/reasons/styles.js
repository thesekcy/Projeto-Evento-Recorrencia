import styled from 'styled-components'
import media from '../../styles/media'
import Parallax from '../../helpers/parallax'

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;

  ${media.greaterThan('md')`
    margin-bottom: 80px;
  `}
`

export const Wrapper = styled.div``

export const Header = styled(Parallax)`
  margin-bottom: 30px;

  ${media.greaterThan('md')`
    margin-bottom: 64px;
    padding: 0 50px;
  `}

  h2 {
    ${media.greaterThan('md')`
      width: 530px;
    `}
  }
`

export const Content = styled.div``

export const Items = styled.div`
  .slick-list {
    overflow: visible;
  }

  @media (min-width: 1420px) {
    width: 100%;

    .slider {
      display: flex;
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      justify-content: space-between;
    }
  }
`

export const Item = styled(Parallax)`
  width: 100%;
  padding-right: 16px;

  @media (min-width: 1420px) {
    padding-right: 0;
    width: 180px !important;
  }
`

export const Image = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 180px;
  margin-bottom: 16px;

  ${media.greaterThan('md')`
    height: 180px;
  `}

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 60%;
    max-height: 80%;

    ${media.greaterThan('md')`
      max-width: 100%;
      max-height: 100%;
    `}
  }
`

export const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;

  ${media.greaterThan('md')`
    font-size: 16px;
  `}

  p {
    line-height: 20px;
  }
`
