import React from "react";
import "./LandingPage.css";
import video from "./Assets/SnapChatVideo1.mp4";
import { Button } from "@material-ui/core";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingPage__left">
        <div className="video-mask">
          <video width="300" height="500" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="landingPage__right">
        <div className="landingPage__header">
          <h1>Express yourself with millions of Lenses.</h1>
        </div>
        <div className="landingPage__options">
          <form action="">
            <select name="" id="">
              <option value="AU"> AU +61</option>
              <option value="SL"> SL +94</option>
              <option value="AU"> AU +61</option>
            </select>
            <div className="landingPage__number">
              <input type="tel" placeholder="Phone number" />
            </div>

            <Button variant="contained" color="primary">
              Send Link
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
