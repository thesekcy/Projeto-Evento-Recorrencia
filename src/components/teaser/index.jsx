import { Container, Wrapper, Header, Video } from './styles'

function Teaser() {
  return (
    <Container>
      <Wrapper className="container">
        <Header tag="header">
          <h2 className="headline-01">Saiba como foi a nossa última edição!</h2>
        </Header>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bmA3XO0Ajd4"
            title="Recurrence 2019 - The best event in the country!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        </Video>
      </Wrapper>
    </Container>
  )
}

export default Teaser
