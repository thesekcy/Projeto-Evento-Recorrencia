import styled, { css } from 'styled-components'
import media from '../../styles/media'

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 0.99);
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  .slick-dots {
    button {
      background: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
`

export const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 20px;
  font-size: 0;
  transition: all 300ms ease;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 9px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: all 300ms ease;
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  ${media.greaterThan('lg')`
    &:hover {
      transform: scale(0.95);

      &:before,
      &:after {
        background: ${({ theme }) => theme.colors.yellow.light};
      }
    }
  `}
`
