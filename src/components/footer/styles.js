import styled from 'styled-components'
import media from '../../styles/media'
import HeartIcon from '../../icons/heart.svg'
import ArrowIcon from '../../icons/arrow.svg'
import FooterIllustrationBG from '../../images/footer-illustration.png'

export const Container = styled.footer`
  ${media.greaterThan('md')`
    margin-top: 60px;
  `}

  ${media.greaterThan('lg')`
    margin-top: 140px;
  `}

  ${media.greaterThan('xl')`
    margin-top: 230px;
  `}
`

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 20px;

  ${media.greaterThan('md')`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 40px;
  `}

  ${media.greaterThan('lg')`
    justify-content: flex-start;
  `}
`

export const Column = styled.div`
  ${media.lessThan('md')`
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  `}

  ${media.greaterThan('md')`
    width: 100%;
  `}

  ${media.greaterThan('lg')`
    width: auto;

    &:last-child {
      width: 100%;
      max-width: 320px;

      ${media.greaterThan('xl')`
        max-width: 440px;
      `}
    }

    &:not(:last-child) {
      margin-right: 100px;
    }
  `}

  ${media.greaterThan('xl')`
    &:not(:last-child) {
      margin-right: 130px;
    }
  `}
`

export const Lists = styled.div`
  ${media.greaterThan('lg')`
    display: flex;
    align-items: flex-start;
  `}
`

export const List = styled.ul`
  font-size: 14px;

  ${media.lessThan('lg')`
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  `}

  ${media.greaterThan('lg')`
    &:last-child {
      margin-left: 64px;
    }
  `}

  li {
    &:not(:last-child) {
      margin-bottom: 8px;

      ${media.greaterThan('lg')`
        margin-bottom: 16px;
      `}
    }
  }

  strong {
    font-size: 16px;
    font-weight: 600;
  }

  a {
    display: inline-block;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black};

    ${media.greaterThan('lg')`
      &:hover {
        text-decoration: underline;
      }
    `}
  }
`

export const Social = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  li {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    svg {
      transition: all 300ms ease;
    }

    ${media.greaterThan('lg')`
      &:hover {
        svg {
          transform: scale(1.05);
        }
      }
    `}
  }
`

export const Mask = styled.div`
  display: none;

  ${media.greaterThan('md')`
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 96px;
    height: 96px;
    background: url(${FooterIllustrationBG}) no-repeat;
    background-size: contain;
  `}
`

export const Newsletter = styled.div`
  font-size: 14px;

  strong {
    font-weight: 700;
  }
`

export const NewsletterForm = styled.form`
  margin-top: 10px;
  width: 100%;

  ${media.greaterThan('md')`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `}

  label {
    width: 100%;
  }

  input {
    display: block;
    width: 100%;
    height: 48px;
    padding: 0 10px;
    font-size: 16px;
    line-height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.blue.light};
    color: ${({ theme }) => theme.colors.blue.dark};
    font-family: 'Montserrat', sans-serif;
  }

  button {
    position: relative;
    display: block;
    width: 100%;
    height: 48px;
    font-size: 0;
    transition: all 300ms ease;

    ${media.greaterThan('md')`
      width: 65px;
    `}

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 17px;
      height: 16px;
      background: url(${ArrowIcon}) no-repeat;
      background-size: contain;
      transform: translate(-50%, -50%);
      transition: all 300ms ease;
    }

    &:hover {
      opacity: 0.9;

      &:after {
        margin-left: 3px;
      }
    }
  }
`

export const Copyright = styled.div`
  padding: 20px;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  ${media.lessThan('md')`
    p {
      line-height: 14px;
    }

    span {
      display: block;
      width: 100%;
      font-size: 0;
    }
  `}

  ${media.greaterThan('lg')`
    font-size: 18px;
  `}

  i {
    display: inline-block;
    width: 21px;
    height: 18px;
    background: url(${HeartIcon}) no-repeat;
    background-size: contain;
    transform: translateY(3px);
  }
`
