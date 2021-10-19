import { useState } from 'react'
import SVG from 'react-inlinesvg'
import useSubscriptionUrl from '../../helpers/subscription-url'
import Logo from '../../icons/logo.svg'
import {
  Container,
  Wrapper,
  LogoButton,
  Nav,
  ToggleButton,
  Subscription,
  SubscriptionButton,
} from './styles'

function Header() {
  const [isNavActive, setIsNavActive] = useState(false)
  const subscriptionUrl = useSubscriptionUrl()

  const closeNav = () => {
    setIsNavActive(false)
  }

  return (
    <Container>
      <Wrapper className="container blue-gradient">
        <LogoButton>
          <SVG src={Logo} />
        </LogoButton>

        <Nav active={isNavActive}>
          <ul>
            <li>
              <a href="#recorrencia" onClick={closeNav}>
                <strong>Recorrência</strong>
              </a>
            </li>
            <li>
              <a href="#agenda" onClick={closeNav}>
                <strong>Agenda</strong>
              </a>
            </li>
            <li>
              <a href="#faq" onClick={closeNav}>
                <strong>FAQ</strong>
              </a>
            </li>
            <li>
              <a href="#patrocinadores" onClick={closeNav}>
                <strong>Patrocinadores</strong>
              </a>
            </li>
          </ul>
        </Nav>

        <ToggleButton
          type="button"
          active={isNavActive}
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <i>Abrir menu</i>
        </ToggleButton>

        <Subscription active={isNavActive}>
          <SubscriptionButton
            href={subscriptionUrl}
            className="pink-gradient"
            target="_blank"
            rel="noreferrer"
          >
            Inscreva-se aqui
          </SubscriptionButton>
        </Subscription>
      </Wrapper>
    </Container>
  )
}

export default Header
