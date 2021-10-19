import { useEffect, useRef } from 'react'
import { Container } from './styles'

function Reveal({ active, children }) {
  const elementRef = useRef(null)

  useEffect(() => {
    elementRef.current.style.height = active
      ? `${elementRef.current.scrollHeight}px`
      : `0px`
  }, [active])

  return (
    <Container ref={elementRef} active={active}>
      {children}
    </Container>
  )
}

export default Reveal
