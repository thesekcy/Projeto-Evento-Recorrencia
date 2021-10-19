import styled, { css } from 'styled-components'
import media from '../../styles/media'

const delayInMs = 600

export const Container = styled.div`
  ${media.greaterThan('lg')`
    transform: translateY(100px);
    opacity: 0;
    visibility: hidden;
    transition: all ${(props) =>
      props.delay + delayInMs}ms cubic-bezier(0.215, 0.61, 0.355, 1);

    ${(props) =>
      props.isActive &&
      css`
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      `}
`}
`
