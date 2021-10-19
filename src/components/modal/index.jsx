import { Container, Wrapper, CloseButton } from './styles'

function Modal({ active, children, onClose }) {
  return (
    <Container active={active}>
      <Wrapper>
        <CloseButton type="button" onClick={onClose}>
          X
        </CloseButton>
        {children}
      </Wrapper>
    </Container>
  )
}

export default Modal
