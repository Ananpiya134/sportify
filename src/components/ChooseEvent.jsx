import React from "react";
import NavBar from "./NavBar";
import { BsStar } from "react-icons/bs";
import { BiCycling } from "react-icons/bi";
import { IoMdFitness } from "react-icons/io";

import {
  MdSportsSoccer,
  MdSportsBasketball,
  MdSportsGolf,
  MdSportsMma,
  MdSportsTennis,
  MdSportsVolleyball,
} from "react-icons/md";

function ChooseEvent() {
  return (
    <div style={{ width: "100vw" }}>
      <div style={{ marginTop: "69px" }}>
        <h4>Choose Your Event</h4>
      </div>
      <div className="container-sport">
        <div className="column-sport">
          <div className="sub-sport">
            <BsStar />
            Others
          </div>
          <div className="sub-sport">
            <BiCycling />
            Cycling
          </div>
          <div className="sub-sport">
            <MdSportsBasketball />
            Basketball
          </div>
        </div>
        <div className="column-sport">
          <div className="sub-sport">
            <MdSportsGolf />
            Golf
          </div>
          <div className="sub-sport">
            <MdSportsSoccer />
            Football
          </div>
          <div className="sub-sport">
            <MdSportsMma />
            Boxing
          </div>
        </div>
        <div className="column-sport">
          <div className="sub-sport">
            <MdSportsTennis />
            Tennis
          </div>
          <div className="sub-sport">
            <IoMdFitness />
            Fitness
          </div>
          <div className="sub-sport">
            <MdSportsVolleyball />
            Valleyball
          </div>
        </div>
      </div>
      <div style={{ marginTop: "7vh" }}>
        <NavBar />
      </div>
    </div>
  );
}

export default ChooseEvent;
