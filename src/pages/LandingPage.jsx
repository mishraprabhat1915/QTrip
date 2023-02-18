import React from "react";
import "../css/LandingPage.css";
import Cards from "./Cards.jsx";
import data from "./LandingPagedata";
const LandingPage = () => {
  return (
    <>
      {/* Hero section start here --> */}

      <div className="hero-image">
        <h1>Welcome to QTrip</h1>
        <p
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            x: { duration: 2 },
            default: { ease: "linear" },
          }}
        >
          Explore the world with fantastic places to venture around
        </p>

        <input
          class="search-bar"
          type="search"
          placeholder="Search City"
          aria-label="Search"
        />
      </div>

      <div className="container tile-list">
        <div className="row parent-body">
          {data.map((val) => {
            console.log(val);
            return (
              <Cards
                key={val.id}
                city_name={val.city_name}
                image={val.image}
                places={val.places}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
