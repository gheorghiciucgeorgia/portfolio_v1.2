import React from "react";
import "../scss/MobileMenu.scss";

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
                              <li>About</li>
                              <li>Work</li>
                              <li>Contact</li>
                          </ul>
                      </div>
                  </div>
                  </div>
              </div>
  </div>
  );
}
