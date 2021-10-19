/* eslint-disable no-unused-vars */
import SVG from 'react-inlinesvg'
import ParallaxMousemove from 'react-parallax-mousemove'
import useSubscriptionUrl from '../../helpers/subscription-url'
import LogoSVG from '../../images/logo-recorrencia.svg'

import MenRight from '../../images/men-right.png'
import ImgRight from '../../images/img-right.png'

import FlagSVG from '../../icons/hero/flag.svg'
import CirclesSVG from '../../icons/hero/circles.svg'
import CoinsSVG from '../../icons/hero/coins.svg'
import EllipsesSVG from '../../icons/hero/ellipses.svg'
import LinesSVG from '../../icons/hero/lines.svg'
import VindiColoredSVG from '../../images/vindi-colored.svg'
import {
  Container,
  ManBG,
  BackBG,
  Row,
  ColumLeft,
  Date,
  Title,
  Logo,
  Description,
  Button,
  Rose,
  MobileBg,
} from './styles'

function Hero() {
  const subscriptionUrl = useSubscriptionUrl()

  return (
    <Container>
      <BackBG>
        <ManBG>
          <Row>
            <ColumLeft>
              <Date>25 a 27 de outubro | online e gratuito</Date>
              <Logo>
                <img
                  src={LogoSVG}
                  className="logo-img"
                  title="Menu"
                  alt="Logo Recorrencia"
                />
              </Logo>
              <Title>
                democracia e&nbsp;<Rose>sustentação</Rose> do modelo
              </Title>
              <Description>
                O Recorrência está de volta! Em 2021, vamos abordar a democracia e
                sustentação do modelo de assinaturas no país. Sua empresa já está
                preparada?
              </Description>
              <Button href={subscriptionUrl}>Inscreva-se grátis</Button>
            </ColumLeft>
          </Row>
        </ManBG>
      </BackBG>
      <MobileBg />
    </Container>
  )
}

export default Hero
