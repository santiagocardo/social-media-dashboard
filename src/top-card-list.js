import React from 'react'

import Card from './card'
import './top-card-list'

const cardListData = [
  {
    id: 1,
    username: '@santiagocardo',
    followers: 135,
    todayFollowers: 10,
    imageUrl: 'images/icon-twitter.svg',
    socialNetwork: 'twitter'
  },
  {
    id: 2,
    username: '@santiagocardo',
    followers: 135,
    todayFollowers: 10,
    imageUrl: 'images/icon-instagram.svg',
    socialNetwork: 'instagram'
  },
  {
    id: 3,
    username: '@santiagocardo',
    followers: 135,
    todayFollowers: 10,
    imageUrl: 'images/icon-facebook.svg',
    socialNetwork: 'facebook'
  },
  {
    id: 4,
    username: '@santiagocardo',
    followers: 135,
    todayFollowers: -1,
    imageUrl: 'images/icon-youtube.svg',
    socialNetwork: 'youtube'
  }
]

function TopCardList () {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map(cardData => {
              return <Card key={cardData.id} {...cardData} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TopCardList
