import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Snapchat-Logo-2013-2019.png"
          alt=""
        />
      </div>
      <div className="header__right">
        <h4 className="header__rightOptions">Download</h4>
        <h4 className="header__rightOptions">Stories </h4>
        <h4 className="header__rightOptions"> Maps </h4>
        <h4 className="header__rightOptions"> Ads</h4>
        <h4 className="header__rightOptions"> Spectacles</h4>
        <h4 className="header__rightOptions"> Filters & Lences</h4>
        <h4 className="header__rightOptions">Lens Studio </h4>
        <h4 className="header__rightOptions">Kit </h4>
        <h4 className="header__rightOptions">Snapcodes </h4>
      </div>
    </div>
  );
};

export default Header;
