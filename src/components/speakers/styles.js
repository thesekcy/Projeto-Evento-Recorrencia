import styled, { css } from 'styled-components'
import media from '../../styles/media'

export const Container = styled.div`
  padding: 30px 0;
  background-color: #f1f2f7;

  ${media.greaterThan('md')`
    padding: 0 0 30px 0;
  `}
`

export const BarHeader = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 64px;
  margin-bottom: 30px;

  ${media.greaterThan('md')`
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  `}

  .square {
    position: absolute;
    top: 0;
    width: 64px;
    height: 64px;

    &:nth-child(1) {
      left: 0;
    }

    &:nth-child(2) {
      left: 64px;
    }

    &:nth-child(3) {
      top: 120px;
      right: 120px;
    }

    &:nth-child(4) {
      right: 0;

      ${media.greaterThan('md')`
        width: 120px;
        height: 120px;
      `}
    }
  }
`

export const Wrapper = styled.div``

export const Header = styled.header`
  margin-bottom: 40px;

  ${media.greaterThan('md')`
    margin-bottom: 110px;
    padding-left: 30px;
  `}

  ${media.greaterThan('lg')`
    padding-left: 50px;
  `}
`

export const Title = styled.h2`
  position: relative;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.light};
  font-style: italic;

  ${media.greaterThan('md')`
    font-size: 48px;
    line-height: 56px;
  `}

  span {
    position: relative;
    z-index: 2;
  }
`

export const DaysSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  ${media.greaterThan('md')`
    margin-bottom: 60px;
  `}
`

export const DaysSelectorButton = styled.button`
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  height: 64px;
  line-height: 60px;
  padding: 0 5px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.pink.light};
  border: 2px solid ${({ theme }) => theme.colors.pink.light};

  ${media.greaterThan('sm')`
    padding: 0 20px;
  `}

  ${media.greaterThan('md')`
    padding: 0 50px;
  `}

  ${media.greaterThan('lg')`
    width: 160px;
    text-align: center;
    padding: 0;
  `}

  ${(props) =>
    props.active &&
    css`
      background: linear-gradient(180deg, #c80050 0%, #9f0037 100%);
      color: ${({ theme }) => theme.colors.white};
    `}
`

export const Items = styled.div`
  ${media.greaterThan('sm')`
    .slider {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  `}

  ${media.greaterThan('lg')`
    margin-bottom: 100px;
  `}
`

export const ItemModal = styled.div`
  background: linear-gradient(180deg, #c80050 0%, #9f0037 100%);
  padding: 20px;
  max-width: 440px;

  @media(max-width: 440px){
    padding: 10px;
  max-width: 340px;

  }

  img {
    max-height: 230px;
    width: 400px;
    object-fit: cover;
    object-position: top;
  }
`

export const CloseButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  color: #f5c913;
  width: fit-content;
  background: linear-gradient(180deg, #00146f 0%, #0b0040 100%);
  font-family: unset;
  padding: 5px 8px;
  position: absolute;
  right: 0;
`
export const ModalTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ffffff;
  padding-top: 20px;
`
export const ModalCargo = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  padding-bottom: 20px;
  padding-top: 5px;
`
export const ModalBio = styled.div`
  max-width: 400px;
  max-height: 200px;
  overflow-y: scroll;
  padding-right: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #00000000;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #e4e4e4;
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }
`

export const Item = styled.article`
  width: 100%;
  margin-bottom: 20px;

  ${media.greaterThan('sm')`
    width: 48%;
    margin-bottom: 60px;
    `}

  ${media.greaterThan('lg')`
    display: flex;
    width: 33%;
    width: calc(33% - 10px);
    margin-bottom: 100px;


  `}
`

export const ItemFigure = styled.figure`
  position: relative;
  width: 100%;
  height: 300px;

  ${media.greaterThan('lg')`
    height: 100%;
    width: 210px;
    min-width: 210px;
    min-height: 210px;
  `}

  img {
    display: none;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

    ${(props) =>
    props.imagePositionY &&
    css`
        background-position: ${props.imagePositionY} center;
      `}

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(11, 0, 64, 0.4) 0%,
        rgba(0, 20, 111, 0.4) 100%
      );
      background-blend-mode: overlay, color, normal;
      z-index: 3;
    }
  }
`

export const ItemColumn = styled.div`
  position: relative;
  padding: 20px 20px 30px 20px;
  color: ${({ theme }) => theme.colors.white};

  ${media.greaterThan('xl')`
    width: 100%;
  `}
`

export const ItemTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  ${media.greaterThan('md')`
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 24px;
  `}
`

export const ItemText = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;

  ${media.greaterThan('xl')`
    font-size: 16px;
  `}

  p {
    line-height: 20px;
  }
`

export const ItemSocials = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 50%);

  li {
    margin: 0 4px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    ${media.greaterThan('lg')`
      &:hover {
        transform: translateY(-2px);
        transition-duration: 150ms;
      }
    `}
  }
`

export const Footer = styled.footer`
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('md')`
    padding-bottom: 100px;
  `}

  .square {
    display: none;
    position: absolute;
    bottom: -30px;
    left: -40px;
    width: 64px;
    height: 64px;

    ${media.greaterThan('md')`
      display: block;
    `}

    &:nth-child(2) {
      left: 24px;
      bottom: 34px;
    }
  }
`

export const SaibaMais = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #ffffff;
`

export const FooterButton = styled.a`
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
