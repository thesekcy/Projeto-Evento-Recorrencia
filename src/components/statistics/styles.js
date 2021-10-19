import styled, { css } from 'styled-components'
import media from '../../styles/media'
import Parallax from '../../helpers/parallax'

export const Container = styled.div`
  margin-bottom: 40px;

  ${media.greaterThan('md')`
    margin-bottom: 80px;
  `}
`

export const Wrapper = styled.div``

export const Header = styled.header`
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

export const Items = styled.div`
  color: ${({ theme }) => theme.colors.white};

  ${media.greaterThan('lg')`
    .slider {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `}
`

export const Item = styled(Parallax)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  padding: 10px;
  font-weight: 600;
  font-size: 24px;

  ${media.greaterThan('lg')`
    width: calc(25% - 20px);
  `}

  ${media.greaterThan('xl')`
    font-size: 32px;
  `}

  p {
    margin: auto;
    line-height: 32px;
    text-align: center;

    ${media.greaterThan('xl')`
      line-height: 40px;
    `}
  }

  strong {
    display: block;
    width: 100%;
    font-size: 60px;
    line-height: 100px;

    ${media.greaterThan('xl')`
      font-size: 96px;
      line-height: 118px;
    `}
  }

  ${({ theme }) =>
    theme === 'pink' &&
    css`
      strong {
        color: #f5c913;
      }
    `}

  ${({ theme }) =>
    theme === 'yellow' &&
    css`
      strong {
        color: #c80050;
      }
    `}

  ${({ theme }) =>
    theme === 'green' &&
    css`
      strong {
        color: #00146f;
      }
    `}

  ${({ theme }) =>
    theme === 'blue' &&
    css`
      strong {
        color: #2ab332;
      }
    `}
`
