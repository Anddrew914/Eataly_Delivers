"use strict"
import React from 'react'
import '../css/grid.css'
import '../css/ionicons.css'

class Section extends React.Component {
  render(){
    return(
      <section className="features">
        <div className="row">
          <h2> About Us </h2>
          <p className="long-copy">
            Star chef Mario Batali&#39;s Italian dining emporium with groceries,
             seafood markets & a dozen eateries. Eataly is the largest Italian
             marketplace in the world, committed to promoting high-quality yet
             affordable regional Italian food with a local twist.
          </p>
        </div>

        <div className="row">
          <div className="col span-1-of-4 box">
            <i className="ion-ios-infinite-outline icon-big" />
            <h3> Now We Deliver! </h3>
            <p> Choose from our unrivaled selection of fresh produce, meat, and
            seafood or order from one of our twelve acclaimed restaurants.</p>
          </div>

          <div className="col span-1-of-4 box">
            <i className="ion-ios-stopwatch-outline icon-big" />
            <h3> Now We Deliver! </h3>
            <p> Choose from our unrivaled selection of fresh produce, meat, and
            seafood or order from one of our twelve acclaimed restaurants.</p>
          </div>

          <div className="col span-1-of-4 box">
            <i className="ion-ios-nutrition-outline icon-big" />
            <h3> Now We Deliver! </h3>
            <p> Choose from our unrivaled selection of fresh produce, meat, and
            seafood or order from one of our twelve acclaimed restaurants.</p>
          </div>

          <div className="col span-1-of-4 box">
            <i className="ion-ios-cart-outline icon-big" />
            <h3> Now We Deliver! </h3>
            <p> Choose from our unrivaled selection of fresh produce, meat, and
            seafood or order from one of our twelve acclaimed restaurants.</p>
          </div>
        </div>
      </section>
    )
  }
}
export default Section
