import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Item from '../components/Item'
import '../scss/pages/Portfolio.scss'
export default function Portfolio() {
  return (
    <>
      <section className="portfolio-page">
          <div className="portfolio">
            <h2 className="portfolio__title title">Портфолио</h2>
            <div className="portfolio-list">
              <Item number={0} size={'large'}/>
              <Item number={1} size={'medium'}/>
              <Item number={1} size={'small'}/>
              <Item number={2} size={'small'}/>
              <Item number={2} size={'medium'}/>
              <Item number={3} size={'large'}/>
            </div>
          </div>
      </section>
    </>
  )
}
