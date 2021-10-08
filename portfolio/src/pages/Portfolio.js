import React from 'react'
import Item from '../components/Item'
import '../scss/pages/Portfolio.scss'
export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__title title">Портфолио</h2>
        <div className="portfolio-list">
          <Item size={'large'}/>
          <Item size={'medium'}/>
          <Item size={'small'}/>
          <Item size={'small'}/>
          <Item size={'medium'}/>
          <Item size={'large'}/>
        </div>
      </section>
    </>
  )
}
