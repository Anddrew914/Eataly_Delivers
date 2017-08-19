import React, {Component} from 'react';
import '../css/BasicSetup.css';
import '../css/FoodMenu.css';
import '../assets/vendor/css/tooltipster.bundle.min.css';
import MappleToolTip from 'reactjs-mappletooltip';
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
    const mappleConfig = { shadow: true, tipPosition: 25 }

    return(
      <div className="section-meals">
        <div className="row">
          <h2>
            - Menu -
          </h2>
        </div>

        <ul className="meals-showcase">
          <li>
            <MappleToolTip {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image1} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak $15</h4>
                <p>Prepared for you to eat!</p>
              </div>
            </MappleToolTip>
          </li>
          <li>
            <MappleToolTip {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image2} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak $15</h4>
                <p>Prepared for you to eat!</p>
              </div>
            </MappleToolTip>
          </li>
          <li>
            <MappleToolTip {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image3} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak $15</h4>
                <p>Prepared for you to eat!</p>
              </div>
            </MappleToolTip>
          </li>
          <li>
            <MappleToolTip {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image4} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak $15</h4>
                <p>Prepared for you to eat!</p>
              </div>
            </MappleToolTip>
          </li>
        </ul>

        <ul className="meals-showcase">
          <li>
            <MappleToolTip direction={'bottom'} {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image5} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak</h4>
                <p>Wonderfully done</p>
              </div>
            </MappleToolTip>
          </li>
          <li>
            <MappleToolTip {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image6} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak $15</h4>
                <p>Prepared for you to eat!</p>
              </div>
            </MappleToolTip>
          </li>
          <li>
            <MappleToolTip {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image7} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak $15</h4>
                <p>Prepared for you to eat!</p>
              </div>
            </MappleToolTip>
          </li>
          <li>
            <MappleToolTip {...mappleConfig}>
              <div>
                <figure className="meal-photo">
                  <img src={image8} alt="meal-1"/>
                  <img src={QuestionMark} alt="info button"/>
                  <img src={Plus} alt="add meal to cart button"/>
                </figure>
              </div>
              <div>
                <h4>Wonder Steak $15</h4>
                <p>Prepared for you to eat!</p>
              </div>
            </MappleToolTip>
          </li>
        </ul>
      </div>
    )
  }
}

export default FoodMenu;
