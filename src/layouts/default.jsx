import { ThemeProvider } from 'styled-components'
import Theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Reasons from '../components/reasons'
import Statistics from '../components/statistics'
import Teaser from '../components/teaser'
import Gallery from '../components/gallery'
import Agenda from '../components/agenda'
import Speakers from '../components/speakers'
import Sponsors from '../components/sponsors'
import Faq from '../components/faq'
import Pilulas from '../components/pilulas'
import Timer from '../components/timer'

function Default() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Timer />
      <Hero />
      <Intro />
      <Reasons />
      <Statistics />
      <Teaser />
      <Gallery />
      <Agenda />
      <Speakers />
      <Faq />
      <Sponsors />
      <Pilulas />
      <Footer />
    </ThemeProvider>
  )
}

export default Default
