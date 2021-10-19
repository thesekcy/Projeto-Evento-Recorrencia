import styled, { css } from 'styled-components'
import media from '../../styles/media'
import AsteriskSVG from '../../icons/asterisk.svg'

export const Container = styled.div`
  padding-bottom: 30px;

  ${media.greaterThan('md')`
    padding-bottom: 180px;
  `}
`

export const Header = styled.header`
  position: relative;
  margin-bottom: 30px;

  ${media.greaterThan('md')`
    margin-bottom: 50px;
  `}

  .triangles {
    position: relative;
    display: flex;
    width: 100%;
    height: 64px;
    transform: translateX(-20px);

    ${media.greaterThan('md')`
      height: 128px;
      transform: translateX(-40px);
    `}

    svg {
      ${media.lessThan('md')`
        width: 57px;
        height: 64px;
      `}
    }
  }

  h2 {
    font-size: 28px;
    line-height: 38px;
    font-style: italic;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};

    ${media.greaterThan('md')`
      font-size: 40px;
      line-height: 56px;
    `}
  }

  .square {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 184px;

    ${media.greaterThan('sm')`
      display: block;
    `}

    &.square--0 {
      height: 90%;
    }

    &.square--1 {
      top: auto;
      bottom: 0;
      height: 10%;
    }
  }
`

export const Wrapper = styled.div``

export const Description = styled.div`
  width: 100%;
  max-width: 780px;
  margin-bottom: 30px;
  font-weight: 500;

  ${media.greaterThan('md')`
    margin-bottom: 80px;

    p {
      font-size: 20px;
      line-height: 32px;
    }
  `}
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
  padding: 0 20px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.blue.dark};
  border: 2px solid ${({ theme }) => theme.colors.blue.dark};

  ${(props) =>
    props.active &&
    css`
      background: linear-gradient(180deg, #00146f 0%, #0b0040 100%);
      color: ${({ theme }) => theme.colors.white};
    `}

  ${media.greaterThan('lg')`
    width: 160px;
    text-align: center;
    padding: 0;
  `}
`

export const DaysContent = styled.div`
  position: relative;
`

export const Day = styled.div`
  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}

  ${media.greaterThan('md')`
    display: block;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;

    &:not(:nth-child(2)) {
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

export const DayHeader = styled.header`
  position: relative;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.blue.light};

  ${media.greaterThan('md')`
      margin-bottom: 0;
  `}

  h3 {
    position: relative;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    font-style: italic;

    ${media.greaterThan('md')`
      font-size: 48px;
      line-height: 64px;
    `}

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: -20px;
      width: 50px;
      height: 50px;
      background: url(${AsteriskSVG}) no-repeat;
      background-size: contain;
      transform: translateY(-50%);

      ${media.greaterThan('md')`
        width: 96px;
        height: 96px;
        left: -30px;
      `}
    }

    span {
      position: relative;
      z-index: 2;
    }
  }

  p {
    position: relative;
    z-index: 3;
    padding-left: 30px;
    font-weight: 600;
    font-size: 16px;
    font-style: italic;

    ${media.greaterThan('md')`
      font-size: 24px;
      line-height: 29px;
    `}
  }
`

export const DayTimeline = styled.div`
  padding: 10px 0 0 20px;
  border-left: 2px solid ${({ theme }) => theme.colors.blue.light};

  ${media.greaterThan('md')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 30px;
  `}
`

export const DayTimelineItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  & > h4 {
    position: relative;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.blue.light};

    ${media.greaterThan('md')`
      font-size: 24px;
      line-height: 29px;
    `}

    &:before {
      content: '';
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      left: -29px;
      background: linear-gradient(180deg, #f5c913 0%, #f5a413 100%);
      transform: translateY(-50%);
    }
  }

  & > p {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    ${media.greaterThan('md')`
      font-size: 16px;
    `}
  }

  button {
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.yellow.light};

    ${media.greaterThan('md')`
      font-size: 16px;
    `}
  }
`

export const DayTimelineItemSpeakers = styled.div`
  padding-bottom: 15px;

  ${media.greaterThan('md')`
    display: flex;
    align-items: flex-start;
  `}

  .row {
    display: flex;
    flex-direction: row;
  }

  .colum {
    display: flex;
    flex-direction: column;
  }

  .nome {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #181818;
    padding-top: 15px;
  }
  .cargo {
    padding-top: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #181818;
    padding-right: 5%;
    padding-bottom: 10px;
  }
  .desc {
    width: 100%;
  }
  .profile {
    max-width: 150px;
  }
  .logo {
    img {
      width: auto;
      max-width: 100px;
      max-height: 80px;
    }
  }

  figure {
    position: relative;
    display: flex;
    /* width: 125px; */
    /* height: 125px; */
    margin-right: 20px;
    align-items: center;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
    }
  }

  img {
    /* display: block; */
    /* width: 100%; */
    /* height: 100%; */
    /* object-fit: cover; */
    /* object-position: center; */
  }
`
