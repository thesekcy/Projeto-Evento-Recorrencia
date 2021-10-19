import { useState } from 'react'
import Modal from 'react-modal'
import Slider from 'react-slick'
import SVG from 'react-inlinesvg'
import useSubscriptionUrl from '../../helpers/subscription-url'
import SpeakersJSON from './data.json'
import LinkedinSVG from '../../icons/linkedin.svg'
import InstagramSVG from '../../icons/instagram.svg'
import FacebookSVG from '../../icons/facebook.svg'
import TwitterSVG from '../../icons/twitter.svg'
import {
  Container,
  BarHeader,
  Wrapper,
  Header,
  Title,
  DaysSelector,
  DaysSelectorButton,
  Items,
  Item,
  ItemFigure,
  ItemColumn,
  ItemTitle,
  ItemText,
  ItemSocials,
  ItemModal,
  Footer,
  SaibaMais,
  ModalTitle,
  ModalCargo,
  ModalBio,
  FooterButton,
  CloseButton,
} from './styles'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: '#C80050',
    padding: 0,
    border: 'none',
    borderRadius: '0',
    oppacity: 0,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

function Speakers() {
  const [dayActive, setDayActive] = useState(0)
  const subscriptionUrl = useSubscriptionUrl()
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
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal(speaker) {
    setIsOpen(speaker)
  }

  function closeModal() {
    setIsOpen(null)
  }
  return (
    <Container>
      {SpeakersJSON.data.length >= 1
        ? SpeakersJSON.data.map((speaker, speakerIndex) => (
            <Modal
              isOpen={modalIsOpen == speaker.title ? true : false}
              onRequestClose={closeModal}
              style={customStyles}
              key={`speaker-${speakerIndex}`}
            >
              <CloseButton onClick={closeModal}>X</CloseButton>
              <ItemModal>
                <img src={process.env.PUBLIC_URL + speaker.image} alt={speaker.title} />
                <ModalTitle>{speaker.title}</ModalTitle>
                <ModalCargo dangerouslySetInnerHTML={{ __html: speaker.text }} />
                <ModalBio>{speaker.bio}</ModalBio>
              </ItemModal>
            </Modal>
          ))
        : null}

      <BarHeader>
        <div className="square blue-gradient" />
        <div className="square pink-gradient" />
        <div className="square pink-gradient" />
        <div className="square blue-gradient" />
      </BarHeader>
      <Wrapper className="container">
        <Header>
          <Title>
            <span>Palestrantes</span>
          </Title>
        </Header>

        <DaysSelector>
          <DaysSelectorButton
            type="button"
            active={dayActive === 0}
            onClick={() => setDayActive(0)}
          >
            Todos
          </DaysSelectorButton>
          <DaysSelectorButton
            type="button"
            active={dayActive === 1}
            onClick={() => setDayActive(1)}
          >
            Dia 01
          </DaysSelectorButton>
          <DaysSelectorButton
            type="button"
            active={dayActive === 2}
            onClick={() => setDayActive(2)}
          >
            Dia 02
          </DaysSelectorButton>
          <DaysSelectorButton
            type="button"
            active={dayActive === 3}
            onClick={() => setDayActive(3)}
          >
            Dia 03
          </DaysSelectorButton>
        </DaysSelector>

        {SpeakersJSON.data.length >= 1 ? (
          <Items>
            <Slider {...settings}>
              {SpeakersJSON.data.map((speaker, speakerIndex) =>
                !dayActive || dayActive === speaker.day ? (
                  <Item key={`speaker-${speakerIndex}`}>
                    <ItemFigure imagePositionY={speaker.imagePositionY}>
                      <img
                        src={process.env.PUBLIC_URL + speaker.image}
                        alt={speaker.title}
                      />
                      <div
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + speaker.image
                          })`,
                        }}
                      />
                    </ItemFigure>
                    <ItemColumn className="pink-gradient">
                      <ItemTitle>{speaker.title}</ItemTitle>
                      <ItemText dangerouslySetInnerHTML={{ __html: speaker.text }} />
                      <SaibaMais
                        onClick={() => {
                          openModal(speaker.title)
                        }}
                      >
                        Saiba mais +
                      </SaibaMais>

                      <ItemSocials>
                        {speaker.linkedin && (
                          <li>
                            <a href={speaker.linkedin} className="blue-gradient">
                              <SVG src={LinkedinSVG} />
                            </a>
                          </li>
                        )}
                        {speaker.twitter && (
                          <li>
                            <a href={speaker.twitter} className="blue-gradient">
                              <SVG src={TwitterSVG} />
                            </a>
                          </li>
                        )}
                        {speaker.instagram && (
                          <li>
                            <a href={speaker.instagram} className="blue-gradient">
                              <SVG src={InstagramSVG} />
                            </a>
                          </li>
                        )}
                        {speaker.facebook && (
                          <li>
                            <a href={speaker.facebook} className="blue-gradient">
                              <SVG src={FacebookSVG} />
                            </a>
                          </li>
                        )}
                      </ItemSocials>
                    </ItemColumn>
                  </Item>
                ) : null
              )}
            </Slider>
          </Items>
        ) : null}

        <Footer>
          <div className="square pink-gradient" />
          <div className="square blue-gradient" />
          <FooterButton
            href={subscriptionUrl}
            target="_blank"
            rel="noreferrer"
            className="pink-gradient"
          >
            Inscreva-se agora
          </FooterButton>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default Speakers
