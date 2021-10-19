import { useEffect, useRef } from 'react'
import { Container } from './styles'

function Reveal({ setAccordionMarginBottom, active, children, dayIndex }) {
  const elementRef = useRef(null)

  useEffect(() => {
    if (active) {
      elementRef.current.style.height = `${elementRef.current.scrollHeight}px`
      if (dayIndex != 1) {
        setAccordionMarginBottom
          ? setAccordionMarginBottom(elementRef.current.scrollHeight)
          : ''
      }
    } else {
      elementRef.current.style.height = `0px`
      setAccordionMarginBottom ? setAccordionMarginBottom(0) : ''
    }
  }, [active])

  return (
    <Container ref={elementRef} active={active}>
      {children}
    </Container>
  )
}

export default Reveal
