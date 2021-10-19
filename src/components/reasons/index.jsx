import Slider from 'react-slick'
import Icon01PNG from '../../icons/reasons/01.png'
import Icon02PNG from '../../icons/reasons/02.png'
import Icon03PNG from '../../icons/reasons/03.png'
import Icon04PNG from '../../icons/reasons/04.png'
import Icon05PNG from '../../icons/reasons/05.png'
import Icon06PNG from '../../icons/reasons/06.png'
import Icon07PNG from '../../icons/reasons/07.png'
import {
  Container,
  Wrapper,
  Header,
  Content,
  Items,
  Item,
  Image,
  Description,
} from './styles'

function Reasons() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          mobileFirst: true,
        },
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
        },
      },
    ],
  }

  return (
    <Container>
      <Wrapper className="container">
        <Header>
          <h2 className="headline-01">7 motivos para participar do Recorrência 2021</h2>
        </Header>

        <Content>
          <Items>
            <Slider {...settings}>
              <Item style={{ width: 196 }}>
                <Image className="green-gradient">
                  <img src={Icon01PNG} alt="motivo 01" />
                </Image>
                <Description>
                  <p>Evento online e 100% gratuito, assista de onde estiver</p>
                </Description>
              </Item>
              <Item delay={100} style={{ width: 196 }}>
                <Image className="pink-gradient">
                  <img src={Icon02PNG} alt="motivo 02" />
                </Image>
                <Description>
                  <p>3 dias de conteúdo sobre Recorrência</p>
                </Description>
              </Item>
              <Item delay={150} style={{ width: 196 }}>
                <Image className="yellow-gradient">
                  <img src={Icon03PNG} alt="motivo 03" />
                </Image>
                <Description>
                  <p>Grade personalizável: escolha o que você vai acompanhar</p>
                </Description>
              </Item>
              <Item delay={200} style={{ width: 196 }}>
                <Image className="blue-gradient">
                  <img src={Icon04PNG} alt="motivo 04" />
                </Image>
                <Description>
                  <p>
                    Conteúdos práticos e casos reais de sucesso, para inspirar o seu
                    negócio
                  </p>
                </Description>
              </Item>
              <Item delay={250} style={{ width: 196 }}>
                <Image className="yellow-gradient">
                  <img src={Icon05PNG} alt="motivo 05" />
                </Image>
                <Description>
                  <p>Entrevistas ao vivo com especialistas em Recorrência</p>
                </Description>
              </Item>
              <Item delay={300} style={{ width: 196 }}>
                <Image className="pink-gradient">
                  <img src={Icon06PNG} alt="motivo 06" />
                </Image>
                <Description>
                  <p>
                    Palestras e mesas-redondas com grandes nomes do mercado brasileiro e
                    empresas em ascensão
                  </p>
                </Description>
              </Item>
              <Item delay={350} style={{ width: 196 }}>
                <Image className="green-gradient">
                  <img src={Icon07PNG} alt="motivo 07" />
                </Image>
                <Description>
                  <p>Certificação em Recorrência: torne sua empresa referência no tema</p>
                </Description>
              </Item>
            </Slider>
          </Items>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Reasons
