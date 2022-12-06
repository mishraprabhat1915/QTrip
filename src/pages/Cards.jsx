import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="col-lg-3  col-md-6 col-sm-6  gy-4 ">
        <a href="./AdventurePage">
          <div class="tiles" key={props.id}>
            <img className="tile-img-top" src={props.image} alt="bengaluru" />
            <div class="tile-body">
              <h2 class="tile-text">{props.city_name}</h2>
              <p class="tile-text">{props.places}+ Places</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Cards;
