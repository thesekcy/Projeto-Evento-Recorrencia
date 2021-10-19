import { useState, useEffect } from 'react'
import Countdown from '../../helpers/countdown/countdown'
import { Container, Row, Title, Button } from './styles'
import useSubscriptionUrl from '../../helpers/subscription-url'

function Timer() {
  const subscriptionUrl = useSubscriptionUrl()
  const currentDate = new Date()
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear()

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container className={scrollPosition < 200 ? 'd-none' : ''}>
      <Row>
        <Title>Inscreva-se! O Evento começa em:</Title>
        <Countdown date={`${year}-10-25T14:00:00`} />
        <Button href={subscriptionUrl}>Inscreva-se gratuitamente</Button>
      </Row>
    </Container>
  )
}

export default Timer
