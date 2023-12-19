/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.scss";
import FooterMiddle from "./FooterMiddle";
import FotterMobail from "./FotterMobail";
import appStore from "./images/Appstore.png";
import playStore from "./images/playstore.png";

const Foter = () => {
  return (
    <>
    <FotterMobail />
    <FooterMiddle />
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>DAILYSHOP</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; mdazharul</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/azharul">Instagram</a>
        <a href="http://youtube.com/azharul">Youtube</a>
        <a href="http://instagram.com/azharul">Facebook</a>
      </div>
    </footer>
    </>
  );
};

export default Foter;
