import Slider from 'react-slick'
import Parallax from '../../helpers/parallax'
import { Container, Wrapper, Header, Items, Item } from './styles'

function Statistics() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 599,
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
          <Parallax tag="h2" className="headline-01">
            Recorrência em números
          </Parallax>
        </Header>
        <Items>
          <Slider {...settings}>
            <Item className="pink-gradient" theme="pink">
              <p>
                <strong>+3000</strong> participantes
              </p>
            </Item>
            <Item delay={100} className="yellow-gradient" theme="yellow">
              <p>
                <strong>+50</strong> palestrantes nacionais e internacionais
              </p>
            </Item>
            <Item delay={200} className="green-gradient" theme="green">
              <p>
                <strong>+500h</strong> de conteúdo sobre Recorrência
              </p>
            </Item>
            <Item delay={300} className="blue-gradient" theme="blue">
              <p>
                <strong>+900</strong> empresas envolvidas
              </p>
            </Item>
          </Slider>
        </Items>
      </Wrapper>
    </Container>
  )
}

export default Statistics
