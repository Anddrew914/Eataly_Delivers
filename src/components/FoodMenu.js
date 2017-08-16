import React, {Component} from 'react';
import '../css/BasicSetup.css';
import '../css/FoodMenu.css';
import QuestionMark from '../fonts/QuestionMark.png';
import Plus from '../fonts/Plus.png';
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
        <ul className="meals-showcase">
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image1} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image2} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image3} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image4} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
        </ul>

        <ul className="meals-showcase">
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image5} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image6} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image7} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="image1" src={image8} alt="meal-1"/>
              <img className="image2" src={QuestionMark} alt="meal-2"/>
              <img className="image3" src={Plus} alt="meal-3"/>
            </figure>
          </li>
        </ul>
      </div>
    )
  }
}

export default FoodMenu;
