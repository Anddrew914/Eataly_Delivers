import React, {Component} from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';

class FoodMenu extends Component{
  render(){
    return(
      <div className="section-meals">
        <ul className="meal-showcase">
          <li>
            <figure className="meal-photo">
              <img src={image1} alt="meal-1"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image2} alt="meal-2"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image3} alt="meal-3"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image4} alt="meal-4"/>
            </figure>
          </li>
        </ul>

        <ul className="meal-showcase">
          <li>
            <figure className="meal-photo">
              <img src={image5} alt="meal-5"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image6} alt="meal-6"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image7} alt="meal-7"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image8} alt="meal-8"/>
            </figure>
          </li>
        </ul>
      </div>
    )
  }
}

export default FoodMenu;
