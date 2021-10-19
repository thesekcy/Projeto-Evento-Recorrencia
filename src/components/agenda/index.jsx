import { useState } from 'react'
import SVG from 'react-inlinesvg'
import Reveal from '../reveal'
import AgendaJSON from './data.json'
import TrianglePinkSVG from '../../icons/triangle-pink.svg'
import TriangleGreenSVG from '../../icons/triangle-green.svg'
import TriangleYellowSVG from '../../icons/triangle-yellow.svg'
import {
  Container,
  Header,
  Wrapper,
  Description,
  DaysSelector,
  DaysSelectorButton,
  DaysContent,
  Day,
  DayHeader,
  DayTimeline,
  DayTimelineItem,
  DayTimelineItemSpeakers,
} from './styles'

function Agenda() {
  const [dayActive, setDayActive] = useState(0)
  const [accordionIndexActive, setAccordionIndexActive] = useState('')

  const changeAccordionIndexActive = (id) => {
    if (accordionIndexActive === id) {
      return setAccordionIndexActive('')
    }

    setAccordionIndexActive(id)
  }

  return (
    <Container id="agenda">
      <Header className="container blue-gradient">
        <div className="triangles">
          <SVG src={TrianglePinkSVG} />
          <SVG src={TriangleGreenSVG} />
          <SVG src={TriangleYellowSVG} />
        </div>
        <h2>Agenda</h2>
        <div className="square square--0 green-gradient" />
        <div className="square square--1 pink-gradient" />
      </Header>
      <Wrapper className="container">
        <Description>
          <p>
            3 dias de conteúdos e uma grade pensada para você explorar os diversos
            universos da Recorrência. Confira os temas e palestrantes já confirmados.
          </p>
        </Description>

        <DaysSelector>
          {AgendaJSON.data.map((day, dayIndex) => (
            <DaysSelectorButton
              type="button"
              key={`day-${dayIndex}`}
              active={dayActive === dayIndex}
              onClick={() => setDayActive(dayIndex)}
            >
              Dia 0{dayIndex + 1}
            </DaysSelectorButton>
          ))}
        </DaysSelector>

        <DaysContent>
          {AgendaJSON.data.map((day, dayIndex) => (
            <Day key={`daycontent-${dayIndex}`} active={dayActive === dayIndex}>
              <DayHeader>
                <h3>
                  <span>{day.date}</span>
                </h3>
                <p>{day.name}</p>
              </DayHeader>

              <DayTimeline>
                {day.items.map((dayItem, dayItemIndex) => (
                  <DayTimelineItem key={`daycontent-${dayIndex}-item-${dayItemIndex}`}>
                    <h4>{dayItem.title}</h4>
                    {dayItem.text && <p>{dayItem.text}</p>}
                    {dayItem.speakers && (
                      <>
                        <Reveal
                          active={accordionIndexActive === `${dayIndex}-${dayItemIndex}`}
                        >
                          <DayTimelineItemSpeakers>
                            {dayItem.speakers.map((speaker, speakerIndex) => (
                              <>
                                <div className="desc">
                                  <figure key={`speaker-${speaker}-${speakerIndex}`}>
                                    <img
                                      src={process.env.PUBLIC_URL + speaker.image}
                                      alt=""
                                      className="profile"
                                    />
                                  </figure>
                                  <p className="nome">{speaker.name}</p>
                                  <p className="cargo">{speaker.cargo}</p>
                                  <div className="logo">
                                    <img
                                      src={process.env.PUBLIC_URL + speaker.logo}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </>
                            ))}
                          </DayTimelineItemSpeakers>
                        </Reveal>
                        <button
                          type="button"
                          onClick={() =>
                            changeAccordionIndexActive(`${dayIndex}-${dayItemIndex}`)
                          }
                        >
                          Mostrar{' '}
                          {accordionIndexActive === `${dayIndex}-${dayItemIndex}`
                            ? 'menos -'
                            : 'mais +'}
                        </button>
                      </>
                    )}
                  </DayTimelineItem>
                ))}
              </DayTimeline>
            </Day>
          ))}
        </DaysContent>
      </Wrapper>
    </Container>
  )
}

export default Agenda
