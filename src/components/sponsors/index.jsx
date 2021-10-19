import SVG from 'react-inlinesvg'
import Parallax from '../../helpers/parallax'
import EloSVG from '../../images/sponsors/elo.svg'
import VindiSVG from '../../images/sponsors/vindi.svg'
import LocawebPNG from '../../images/sponsors/locaweb.png'
import YapaySVG from '../../images/sponsors/yapay.svg'
import NetshowmeSVG from '../../images/sponsors/netshowme.svg'
import FooterBarSVG from '../../icons/sponsors/footer-bar.svg'
import {
  Container,
  Wrapper,
  Content,
  Title,
  List,
  HeaderBar,
  FooterBar,
  Square,
} from './styles'

function Sponsors() {
  return (
    <>
      <HeaderBar className="pink-gradient" />
      <Container id="patrocinadores" className="blue-gradient">
        <Wrapper className="container">
          <Content>
            <Title tag="h2" sponsors={true}>
              Patrocinadores
            </Title>
            <List sponsors={true}>
              <Parallax tag="li" delay={50}>
                <a href="https://www.elo.com.br" target="_blank" rel="noreferrer">
                  <SVG src={EloSVG} className="elo" />
                </a>
              </Parallax>
              <Parallax tag="li" delay={100}>
                <a href="https://www.yapay.com.br" target="_blank" rel="noreferrer">
                  <SVG src={YapaySVG} className="yapay" />
                </a>
              </Parallax>
              <Parallax tag="li" delay={150}>
                <a href="https://netshow.me" target="_blank" rel="noreferrer">
                  <SVG src={NetshowmeSVG} className="netshowme" />
                </a>
              </Parallax>
            </List>
          </Content>
          <Content>
            <Title tag="h2" sponsors={false}>
              Realização e Apoio
            </Title>
            <List sponsors={false}>
              <Parallax tag="li" delay={50}>
                <a href="https://vindi.com.br" target="_blank" rel="noreferrer">
                  <SVG src={VindiSVG} className="vindi" />
                </a>
              </Parallax>
              <Parallax tag="li" delay={100}>
                <a href="https://www.locaweb.com.br" target="_blank" rel="noreferrer">
                  <img src={LocawebPNG} alt="Locaweb" className="locaweb" />
                </a>
              </Parallax>
            </List>
          </Content>
        </Wrapper>
        <Square delay={50} position={0} className="yellow-gradient" />
        <Square delay={100} position={1} className="pink-gradient" />
        <Square delay={150} position={2} className="pink-gradient" />
        <Square delay={250} position={3} className="green-gradient" />
        <Square delay={200} position={4} className="yellow-gradient" />
      </Container>
      <Parallax>
        <FooterBar src={FooterBarSVG} />
      </Parallax>
    </>
  )
}

export default Sponsors
