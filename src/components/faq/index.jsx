import { useState } from 'react'
import SVG from 'react-inlinesvg'
import Parallax from '../../helpers/parallax'
import Reveal from '../reveal'
import FaqJSON from './data.json'
import TrianglePinkSVG from '../../icons/triangle-pink.svg'
import TriangleGreenSVG from '../../icons/triangle-green.svg'
import TriangleYellowSVG from '../../icons/triangle-yellow.svg'
import {
  Container,
  BarHeader,
  Wrapper,
  Header,
  Column,
  Text,
  ButtonDownload,
  ButtonMore,
  Items,
  Item,
  ItemTitle,
  ItemText,
} from './styles'

function Faq() {
  const [indexActive, setIndexActive] = useState(-1)

  const changeIndexActive = (index) => {
    if (indexActive === index) {
      return setIndexActive(-1)
    }

    setIndexActive(index)
  }

  return (
    <Container id="faq">
      <BarHeader>
        <Parallax className="square pink-gradient" />
        <Parallax delay={50} className="square blue-gradient" />
        <Parallax delay={100} className="square pink-gradient" />
        <Parallax delay={150} className="square yellow-gradient" />
        <Parallax delay={200} className="bar green-gradient" />
        <div className="triangles">
          <SVG src={TriangleYellowSVG} />
          <SVG src={TriangleGreenSVG} />
          <SVG src={TrianglePinkSVG} />
        </div>
      </BarHeader>
      <Wrapper className="container">
        <Header>
          <Parallax tag="h2" className="headline-01">
            <span>Faq</span>
          </Parallax>
        </Header>

        <Column>
          <Text>
            <h3>Mídia Kit Recorrência</h3>
            <p>Informações detalhadas para patrocinadores e imprensa.</p>
            <ButtonDownload
              href="https://blog.vindi.com.br/wp-content/uploads/2021/09/Recorrencia-Midia-Kit-Imprensa-e-Influenciadores.pdf"
              target="_blank"
              className="blue-gradient"
            >
              Baixe material completo
            </ButtonDownload>
          </Text>
          <Text>
            <h3>Conheça a Vindi</h3>
            <p>
              O Recorrência é um evento criado e produzido pela Vindi, fintech líder no
              mercado de assinaturas no Brasil.
            </p>
            <ButtonMore href="https://vindi.com.br/sobre/" target="_blank">
              Saiba mais
            </ButtonMore>
          </Text>
        </Column>

        <Items>
          {FaqJSON.data.map((item, itemIndex) => (
            <Item
              tag="article"
              key={`faq-item-` + itemIndex}
              active={indexActive === itemIndex}
            >
              <ItemTitle
                active={indexActive === itemIndex}
                onClick={() => changeIndexActive(itemIndex)}
              >
                {item.title} <i />
              </ItemTitle>
              <Reveal active={indexActive === itemIndex}>
                <ItemText
                  className="rich-text"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </Reveal>
            </Item>
          ))}
        </Items>
      </Wrapper>
    </Container>
  )
}

export default Faq
