import styled from 'styled-components'
import media from '../../styles/media'
import Parallax from '../../helpers/parallax'

export const Container = styled.div``

export const Items = styled.div`
  .slick-dots {
    margin: 0;
    position: absolute;
    bottom: 20px;
    width: 100%;
  }

  .slick-slide {
    font-size: 0;
  }

  ${media.greaterThan('sm')`
    background: transparent !important;

    .slider {
      width: 100%;
      display: flex;
      font-size: 0;
      flex-wrap: wrap;
    }
  `}
`

export const Item = styled(Parallax)`
  width: auto;
  height: 400px;
  position: relative;
  display: flex !important;
  align-items: center;
  justify-content: center;

  .imagebg {
    display: none;
    cursor: pointer;
  }

  ${media.greaterThan('sm')`
    width: 33.3%;
    height: 200px;
    display: block !important;

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(8),
    &:nth-child(9) {
      .imagebg {
        width: 50%;
      }
    }

    &:nth-child(2) {
      background: linear-gradient(180deg, #F5C913 0%, #F5A413 100%);
    }

    &:nth-child(4) {
      background: linear-gradient(180deg, #C80050 0%, #9F0037 100%);
    }

    &:nth-child(8) {
      background: linear-gradient(180deg, #2AB332 0%, #2A6B32 100%);

      .imagebg {
        left: auto;
        right: 0;
      }
    }

    &:nth-child(9) {
      background: linear-gradient(180deg, #00146F 0%, #0B0040 100%);

      .imagebg {
        left: auto;
        right: 0;
      }
    }

    img {
      display: none;
    }

    .imagebg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
        transition: all 300ms ease-in-out;

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .2);
          z-index: 2;
          transition: all 300ms ease;
          opacity: 0;
          visibility: hidden;
        }
      }

      ${media.greaterThan('lg')`
        &:hover {
          span {
            transform: scale(1.03);

            &:before {
              opacity: 1;
              visibility: visible;
            }
          }
        }
      `}
    }
  `}
`

export const Footer = styled(Parallax)`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('sm')`
    padding: 40px;
  `}

  ${media.greaterThan('sm')`
    padding: 90px;
  `}
`

export const Button = styled.a`
  display: inline-block;
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

export const ModalItem = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;

  img {
    width: 100%;
    height: auto;
    max-width: 90%;
    max-height: 90%;
    margin: auto;

    ${media.greaterThan('lg')`
      max-width: 100%;
      max-height: inherit;
    `}
  }
`
