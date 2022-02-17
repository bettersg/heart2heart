import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import DeckItem from './DeckItem'
import './Deck.css'

const items = [
  {
    id: 0,
    title: 'This should lasts 2s',
    body: '1st',
    interval: 2000,
    autoPlay: true,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: true,
  },
  {
    id: 1,
    title: 'This should lasts 6s',
    body: '2nd',
    interval: 6000,
    autoPlay: true,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: true,
  },
  {
    id: 2,
    title: 'This should have navigation',
    body: '3rd',
    interval: 0,
    autoPlay: false,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
  },
]

const Deck: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useState(items[0])
  return (
    <div style={{ backgroundColor: 'black', height: '1000px' }}>
      <Carousel
        autoPlay={currentDeck.autoPlay}
        animation="slide"
        index={currentDeck.id}
        interval={currentDeck.interval}
        navButtonsAlwaysVisible={currentDeck.navButtonsAlwaysVisible}
        navButtonsAlwaysInvisible={currentDeck.navButtonsAlwaysInvisible}
        swipe={false}
        indicators={false}
        onChange={(now) => {
          setCurrentDeck(items[now === undefined ? 0 : now])
        }}
      >
        {items.map((item) => (
          <DeckItem key={item.title} item={item} />
        ))}
      </Carousel>
    </div>
  )
}

export default Deck
