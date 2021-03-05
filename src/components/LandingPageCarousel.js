import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

export default function LandingPageCarousel() {
  return (
    <Carousel>
      <Carousel.Item >
        <Image
          className="d-block w-300 h-300"
          src="https://images.photowall.com/products/46385/zen-in-black-sand.jpg?h=699&q=85"
          alt="Freshe Steine"
          fluid
        />
        <Carousel.Caption>
          <h3>Wooow MySenpai ist ja der absolute mega-Wahnsinn!!</h3>
          <p>Bruder ich schwör!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-300 h-300"
          src="https://fitness-ketten.de/wp-content/uploads/2017/12/Junge-Frau-trainiert-mit-Liegestuetzgriffen.jpg"
          alt="Sieht anstrengend aus"
          fluid
        />
        <Carousel.Caption>
          <h3>Ich sags Dir... MySenpai... That's some real shit</h3>
          <p>Wer nicht MySenpai benutzt läuft komplett am Leben vorbei</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
