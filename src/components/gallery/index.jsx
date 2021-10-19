import { useState, useRef } from 'react'
import Slider from 'react-slick'
import useSubscriptionUrl from '../../helpers/subscription-url'
import Modal from '../modal'
import Gallery01JPG from '../../images/gallery/01.jpg'
import Gallery02JPG from '../../images/gallery/02.jpg'
import Gallery03JPG from '../../images/gallery/03.jpg'
import Gallery04JPG from '../../images/gallery/04.jpg'
import Gallery05JPG from '../../images/gallery/05.jpg'
import Gallery06JPG from '../../images/gallery/06.jpg'
import Gallery07JPG from '../../images/gallery/07.jpg'
import Gallery08JPG from '../../images/gallery/08.jpg'
import Gallery09JPG from '../../images/gallery/09.jpg'
import GalleryFull01JPG from '../../images/gallery/full/01.jpg'
import GalleryFull02JPG from '../../images/gallery/full/02.jpg'
import GalleryFull03JPG from '../../images/gallery/full/03.jpg'
import GalleryFull04JPG from '../../images/gallery/full/04.jpg'
import GalleryFull05JPG from '../../images/gallery/full/05.jpg'
import GalleryFull06JPG from '../../images/gallery/full/06.jpg'
import GalleryFull07JPG from '../../images/gallery/full/07.jpg'
import GalleryFull08JPG from '../../images/gallery/full/08.jpg'
import GalleryFull09JPG from '../../images/gallery/full/09.jpg'
import { Container, Items, Item, Footer, Button, ModalItem } from './styles'

function Gallery() {
  const modalSliderRef = useRef(null)
  const [isModalActive, setIsModalActive] = useState(false)
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
          mobileFirst: true,
        },
      },
    ],
  }

  const modalSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const openModal = (index) => {
    setIsModalActive(true)
    modalSliderRef.current.slickGoTo(index, true)
  }

  const onCloseModal = () => {
    setIsModalActive(false)
  }

  return (
    <Container>
      <Items className="yellow-gradient">
        <Slider {...settings}>
          <Item onClick={() => openModal(0)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery01JPG})` }} />
            </div>
            <img src={Gallery01JPG} alt="galeria imagem 1" />
          </Item>
          <Item delay={100} onClick={() => openModal(1)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery02JPG})` }} />
            </div>
            <img src={Gallery02JPG} alt="galeria imagem 2" />
          </Item>
          <Item delay={150} onClick={() => openModal(2)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery03JPG})` }} />
            </div>
            <img src={Gallery03JPG} alt="galeria imagem 3" />
          </Item>
          <Item onClick={() => openModal(3)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery04JPG})` }} />
            </div>
            <img src={Gallery04JPG} alt="galeria imagem 4" />
          </Item>
          <Item delay={100} onClick={() => openModal(4)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery05JPG})` }} />
            </div>
            <img src={Gallery05JPG} alt="galeria imagem 5" />
          </Item>
          <Item delay={150} onClick={() => openModal(5)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery06JPG})` }} />
            </div>
            <img src={Gallery06JPG} alt="galeria imagem 6" />
          </Item>
          <Item onClick={() => openModal(6)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery07JPG})` }} />
            </div>
            <img src={Gallery07JPG} alt="galeria imagem 7" />
          </Item>
          <Item delay={100} onClick={() => openModal(7)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery08JPG})` }} />
            </div>
            <img src={Gallery08JPG} alt="galeria imagem 8" />
          </Item>
          <Item delay={150} onClick={() => openModal(8)}>
            <div className="imagebg">
              <span style={{ backgroundImage: `url(${Gallery09JPG})` }} />
            </div>
            <img src={Gallery09JPG} alt="galeria imagem 9" />
          </Item>
        </Slider>
      </Items>
      <Footer tag="footer" className="yellow-gradient">
        <Button
          href={subscriptionUrl}
          className="pink-gradient"
          target="_blank"
          rel="noreferrer"
        >
          Garanta sua inscrição
        </Button>
      </Footer>
      <Modal active={isModalActive} onClose={onCloseModal}>
        <Slider ref={(slider) => (modalSliderRef.current = slider)} {...modalSettings}>
          <ModalItem>
            <img src={GalleryFull01JPG} alt="galeria imagem 1" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull02JPG} alt="galeria imagem 2" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull03JPG} alt="galeria imagem 3" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull04JPG} alt="galeria imagem 4" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull05JPG} alt="galeria imagem 5" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull06JPG} alt="galeria imagem 6" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull07JPG} alt="galeria imagem 7" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull08JPG} alt="galeria imagem 8" />
          </ModalItem>
          <ModalItem>
            <img src={GalleryFull09JPG} alt="galeria imagem 9" />
          </ModalItem>
        </Slider>
      </Modal>
    </Container>
  )
}

export default Gallery
