import { useState } from 'react'
import Parallax from '../../helpers/parallax'
import {
  Container,
  Wrapper,
  Header,
  Description,
  Text,
  Columns,
  Column,
  Contents,
  Content,
  Numbers,
  TextFeatured,
  ButtonFeatured,
  Squares,
} from './styles'

function Intro() {
  const [featuredIndex, setFeaturedIndex] = useState(0)
  return (
    <Container id="recorrencia">
      <Squares position={0}>
        <Parallax className="blue-gradient" />
        <Parallax delay={100} className="yellow-gradient" />
      </Squares>
      <Squares position={1}>
        <Parallax className="green-gradient" />
        <Parallax delay={100} className="yellow-gradient" />
      </Squares>

      <Header>
        <Squares position={1}>
          <Parallax className="blue-gradient" />
          <Parallax delay={100} className="yellow-gradient" />
        </Squares>

        <Squares position={5}>
          <Parallax className="yellow-gradient" />
          <Parallax delay={100} className="yellow-gradient" />
        </Squares>
        <Description className="rich-text">
          <p>
            A recorrência vem se consolidando como um modelo eficiente para diversos
            segmentos e portes de negócio.
          </p>

          <p>
            Chegamos na era da sustentação desse formato de consumo, onde grandes empresas
            acoplam as assinaturas ao formato tradicional de venda e os pequenos
            empreendedores se utilizam da recorrência para crescer (e sobreviver).
          </p>
          <p>
            Saiba por que você (e sua empresa) devem participar do maior evento do Brasil
            sobre assinaturas e recorrência.
          </p>
        </Description>
        <Squares position={2}>
          <Parallax className="yellow-gradient" />
          <Parallax delay={100} className="blue-gradient" />
          <Parallax delay={200} className="pink-gradient" />
        </Squares>
      </Header>

      <Wrapper className="container">
        <Columns>
          <Column>
            <Squares position={3}>
              <Parallax className="blue-gradient" />
              <Parallax delay={100} className="yellow-gradient" />
            </Squares>
            <TextFeatured>
              <Parallax tag="h3" className="headline-01">
                Mercado de Recorrência no Brasil
              </Parallax>
              <div>
                <ButtonFeatured
                  tag="button"
                  type="button"
                  index={0}
                  active={featuredIndex === 0}
                  onMouseEnter={() => setFeaturedIndex(0)}
                >
                  <strong>
                    O modelo recorrente é uma escolha cada vez mais presente na rotina do
                    consumidor brasileiro. E uma prova disso é a quantidade de serviços
                    assinados e o valor gasto mensalmente em recorrência.
                  </strong>
                </ButtonFeatured>
                <ButtonFeatured
                  tag="button"
                  type="button"
                  index={1}
                  active={featuredIndex === 1}
                  onMouseEnter={() => setFeaturedIndex(1)}
                >
                  <strong>
                    Em 2020, as empresas que trabalham com recorrência aumentaram tanto o
                    seu número de clientes quanto de vendas em percentuais bem superiores
                    a empresas que não utilizam o modelo.
                  </strong>
                </ButtonFeatured>
                <ButtonFeatured
                  tag="button"
                  type="button"
                  index={2}
                  active={featuredIndex === 2}
                  onMouseEnter={() => setFeaturedIndex(2)}
                >
                  <strong>
                    As pessoas enxergam cada vez mais valor na contratação de serviços
                    recorrentes. Essa valorização é percebida por conta da experiência que
                    é oferecida, além de todas as comodidades e facilidades. O que resulta
                    no aumento da confiança para assinar e efetuar o pagamento.
                  </strong>
                </ButtonFeatured>
              </div>
            </TextFeatured>
          </Column>

          <Column>
            <Contents>
              <Content index={0} active={featuredIndex === 0}>
                <Numbers index={0}>
                  <p>
                    <span>
                      <i>
                        <sup>+</sup>R$
                      </i>
                      <strong>300</strong>
                    </span>{' '}
                    é o gasto mensal com assinaturas
                  </p>
                </Numbers>

                <Text className="rich-text">
                  <ul>
                    <li>
                      O público que gasta +R$300 com assinaturas mensais, é 2,8 vezes
                      maior do que o público que gasta até R$ 50.
                    </li>
                    <li>
                      74% das assinaturas correspondem a serviços digitais, que vão desde
                      serviços de streaming de filmes e música, jogos, aplicativos, etc.
                    </li>
                  </ul>
                  <p>
                    <a
                      href="https://conheca.vindi.com.br/pesquisa-de-assinaturas?utm_medium=site-recorrencia&utm_source=event&utm_campaign=[campanha][site-vindi]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acesse a pesquisa completa
                    </a>
                  </p>
                </Text>
              </Content>
              <Content index={1} active={featuredIndex === 1}>
                <Numbers index={1}>
                  <p>
                    Aumento de{' '}
                    <span>
                      <strong>67</strong>%
                    </span>{' '}
                    número de clientes
                  </p>
                </Numbers>

                <Text className="rich-text">
                  <p>
                    Que a recorrência se torna cada vez mais um bom negócio para os
                    empreendedores, não restam dúvidas, mas os números mostram, também, o
                    quanto essas empresas crescem em relação às que não fazem uso do
                    modelo recorrente.
                  </p>
                  <ul>
                    <li>
                      Das empresas que utilizam a recorrência, 67% aumentaram o número de
                      clientes, enquanto empresas não recorrentes tiveram um aumento de
                      apenas 6%.
                    </li>
                    <li>
                      Enquanto o crescimento de vendas das empresas recorrentes foi de
                      65%, o das empresas não recorrentes foi de 28%.
                    </li>
                  </ul>
                  <p>
                    <a
                      href="https://conheca.vindi.com.br/pesquisa-de-assinaturas?utm_medium=site-recorrencia&utm_source=event&utm_campaign=[campanha][site-vindi]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acesse a pesquisa completa
                    </a>
                  </p>
                </Text>
              </Content>
              <Content index={2} active={featuredIndex === 2}>
                <Numbers index={2}>
                  <p>
                    <span>
                      <strong>39,8</strong>%
                    </span>{' '}
                    experiência de consumo
                  </p>
                </Numbers>

                <Text className="rich-text">
                  <ul>
                    <li>
                      39,8% dos consumidores acreditam que o principal benefício dos
                      serviços recorrentes está na experiência para acessar e consumir os
                      serviços.
                    </li>
                    <li>
                      Em relação à confiança para inserir dados de pagamento para assinar
                      esses produtos, a nota média foi de 7.8
                    </li>
                  </ul>
                  <p>
                    <a
                      href="https://conheca.vindi.com.br/pesquisa-de-assinaturas?utm_medium=site-recorrencia&utm_source=event&utm_campaign=[campanha][site-vindi]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acesse a pesquisa completa
                    </a>
                  </p>
                </Text>
              </Content>
            </Contents>
          </Column>
        </Columns>

        <Squares position={4}>
          <Parallax className="blue-gradient" />
          <Parallax delay={100} className="pink-gradient" />
          <Parallax delay={200} className="yellow-gradient" />
        </Squares>
      </Wrapper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default Intro
