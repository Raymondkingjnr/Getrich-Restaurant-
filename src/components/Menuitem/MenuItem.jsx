import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-name">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="menuitem-sub">
      <p className="opensans" style={{ color: "#aaa" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
