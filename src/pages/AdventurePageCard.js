import React from "react";

const AdventurePageCard = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-6 gy-4">
        <a href="/ResortPage">
          <div class="card" key={props.id} style={{ width: "18rem" }}>
            <img src={props.image} class="" alt="{props.place}" />
            <div class="card-body">
              <h1 class="card-text">{props.place}</h1>
              <p class="card-text">Rs.{props.price}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default AdventurePageCard;
