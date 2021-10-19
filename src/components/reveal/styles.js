import styled, { css } from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  transition: height 300ms ease;

  ${(props) =>
    props.active &&
    css`
      height: auto;
    `}
`
