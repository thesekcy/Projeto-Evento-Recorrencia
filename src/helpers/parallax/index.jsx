import { useCallback, useEffect, useState, useRef } from 'react'
import useScrollPosition from '../../helpers/scroll-position'
import { Container } from './styles'

const scrollPercentToActive = (window.innerHeight * 10) / 100

function Parallax({ children, tag = 'div', delay = 0, ...props }) {
  const scrollPosition = useScrollPosition()
  const elementRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  const handleScrollPosition = useCallback(() => {
    if (!elementRef.current || isActive) {
      return false
    }

    // const bodyRect = document.body.getBoundingClientRect()
    const elRect = elementRef.current.getBoundingClientRect()
    const elementTopWindow = parseInt(
      elRect.top - window.innerHeight + scrollPercentToActive
    )
    // const currentElementTop = elRect.top - bodyRect.top

    if (elementTopWindow < 0 && !isActive) {
      setIsActive(true)
    }
  }, [isActive])

  useEffect(() => {
    handleScrollPosition(scrollPosition)
  }, [scrollPosition, handleScrollPosition])

  return (
    <Container as={tag} isActive={isActive} delay={delay} ref={elementRef} {...props}>
      {children}
    </Container>
  )
}

export default Parallax
