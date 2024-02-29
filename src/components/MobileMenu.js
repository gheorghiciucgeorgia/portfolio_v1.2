import React from "react";
//import { Link } from 'react-router-dom';
import "../scss/MobileMenu.scss";
import staricon from "../assets/icons/star_2000x2000px.svg";
import elipse from "../assets/icons/elipses_white_2000x2000px.svg";
import star from "../assets/icons/star_256x256px.svg";

export default function MobileMenu() {
  return (
    <div>
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li><img className="star-icon" src={staricon} alt="star-icon"/>About</li>
                <li><img className="star-icon" src={elipse} alt="elipse-icon"/>Work</li>
                <li><img className="star-icon" src={star} alt="starts"/>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
