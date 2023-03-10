import React from "react";
import { images, data } from "../../constants/";

import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialmenu flex__center" id="menu">
    <div className="app__specialmenu-title">
      <SubHeading title="More That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialmenu-menu section__padding">
      <div className="app__specialmenu-menu_wine">
        <p className="app__specialmenu-menu_heading">Wine & Beer</p>

        <div className="app__specialmenu_menu_item">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="app__specialmenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialmenu-menu_cocktails">
        <p className="app__specialmenu-menu_heading">Cocktails</p>

        <div className="app__specialmenu_menu_item">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
