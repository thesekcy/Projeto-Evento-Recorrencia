import SVG from 'react-inlinesvg'
import LogoRecorrencia from '../../images/logo-recorrencia.svg'
import LinkedInIcon from '../../icons/linkedin.svg'
import TwitterIcon from '../../icons/twitter.svg'
import InstagramIcon from '../../icons/instagram.svg'
import FacebookIcon from '../../icons/facebook.svg'
import {
  Container,
  Wrapper,
  Column,
  Lists,
  List,
  Social,
  Mask,
  Newsletter,
  NewsletterForm,
  Copyright,
} from './styles'

function Footer() {
  return (
    <Container>
      <Wrapper className="container">
        <Mask />

        <Column>
          <SVG src={LogoRecorrencia} />
        </Column>

        <Column>
          <Lists>
            <List>
              <li>
                <a
                  href="https://blog.vindi.com.br/recorrencia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Recorrência</strong>
                </a>
              </li>
              <li>
                <a
                  href="https://blog.vindi.com.br/recorrencia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  O que é recorrência?
                </a>
              </li>
              <li>
                <a
                  href="https://www.recorrencia.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Categorias
                </a>
              </li>
              <li>
                <a
                  href="https://www.recorrencia.com.br/cadastre/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Divulgue seu negócio
                </a>
              </li>
              <li>
                <a href="https://t.me/recorrencia" target="_blank" rel="noreferrer">
                  Canal do Telegram
                </a>
              </li>
            </List>
            <List>
              <li>
                <a href="https://vindi.com.br/" target="_blank" rel="noreferrer">
                  <strong>Sobre a Vindi</strong>
                </a>
              </li>
              <li>
                <a href="https://vindi.com.br/" target="_blank" rel="noreferrer">
                  Sobre
                </a>
              </li>
              <li>
                <a href="https://blog.vindi.com.br/" target="_blank" rel="noreferrer">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://vindi.com.br/precos/" target="_blank" rel="noreferrer">
                  Soluções e preços
                </a>
              </li>
            </List>
          </Lists>
        </Column>

        <Column>
          <Social>
            <li>
              <a
                href="https://www.linkedin.com/company/vindi/"
                target="_blank"
                rel="noreferrer"
                className="blue-gradient"
              >
                <SVG src={LinkedInIcon} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/vindi"
                target="_blank"
                rel="noreferrer"
                className="blue-gradient"
              >
                <SVG src={TwitterIcon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vindibr/"
                target="_blank"
                rel="noreferrer"
                className="blue-gradient"
              >
                <SVG src={InstagramIcon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/VindiBR/"
                target="_blank"
                rel="noreferrer"
                className="blue-gradient"
              >
                <SVG src={FacebookIcon} />
              </a>
            </li>
          </Social>

          <Newsletter>
            <p>
              <strong>Nossa newsletter!</strong>
            </p>
            <NewsletterForm
              method="post"
              action="https://docs.vindi.com.br/l/791943/2020-01-29/clzd"
            >
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </label>
              <button type="submit" className="blue-gradient">
                Enviar
              </button>
            </NewsletterForm>
          </Newsletter>
        </Column>
      </Wrapper>
      <Copyright className="pink-gradient">
        <p>
          Vindi 2021 - Todos os direitos reservados <span>-</span> Made with <i /> in Sao
          Paulo
        </p>
      </Copyright>
    </Container>
  )
}

export default Footer
