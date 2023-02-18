import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <>
      <div
        className="col-lg-3  col-md-6 col-sm-6  gy-4 "
      >
        <Link to="/adventurepage">
          <div class="tiles" key={props.id}>
            <img className="tile-img-top" src={props.image} alt="bengaluru" />
            <div class="tile-body">
              <h2 whileHover={{ x: 20, scale: 1.2 }} class="tile-text">
                {props.city_name}
              </h2>
              <p whileHover={{ x: 20, scale: 1.2 }} class="tile-text">
                {props.places}+ Places
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
