import React from "react";
import "../css/AdventurePage.css";
import AdventurePageCard from "./AdventurePageCard";
import AdventurePageData from "./AdventurePageData";
const AdventurePage = () => {
  return (
    <>
      <div className="container">
        <h1>Explore all Adventures</h1>
        <p>Here's a list of adventures that you can eplore in the city</p>
      </div>
      <div className="container">
        <div className="row">
          {AdventurePageData.map((val) => {
            return (
              <AdventurePageCard
                key={val.id}
                place={val.place}
                image={val.image}
                price={val.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdventurePage;
