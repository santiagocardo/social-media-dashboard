import React from 'react'

import CardSmall from './card-small'
import './overview.css'

const cardSmallList = [
  {
    id: 1,
    imageUrl: 'images/icon-twitter.svg',
    pageViews: 52,
    growth: 12
  },
  {
    id: 2,
    imageUrl: 'images/icon-instagram.svg',
    pageViews: 88,
    growth: 21
  },
  {
    id: 3,
    imageUrl: 'images/icon-facebook.svg',
    pageViews: 26,
    growth: 2
  },
  {
    id: 4,
    imageUrl: 'images/icon-youtube.svg',
    pageViews: 63,
    growth: 19
  },
  {
    id: 5,
    imageUrl: 'images/icon-twitter.svg',
    pageViews: 15,
    growth: 3
  },
  {
    id: 6,
    imageUrl: 'images/icon-instagram.svg',
    pageViews: 62,
    growth: 5
  },
  {
    id: 7,
    imageUrl: 'images/icon-facebook.svg',
    pageViews: 45,
    growth: 8
  },
  {
    id: 8,
    imageUrl: 'images/icon-youtube.svg',
    pageViews: 87,
    growth: 24
  },
]

function Overview () {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {
            cardSmallList.map(cardSmall => <CardSmall key={cardSmall.id} {...cardSmall} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Overview
