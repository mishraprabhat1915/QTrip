import React from "react";
import "../css/LandingPage.css";
import Cards from "./Cards.jsx";
import data from "./LandingPagedata";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <>
      {/* Hero section start here --> */}

      <div className="hero-image">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: "linear" }
          }}
        >Welcome to QTrip</motion.h1>
        <motion.p
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            x: { duration: 2 },
            default: { ease: "linear" }
          }}
        >Explore the world with fantastic places to venture around</motion.p>

        <motion.input
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          delay: 1,
          x: { duration: 3 },
          default: { ease: "linear" }
        }}
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

      {/* tile start here */}
      {/* 
            

 */}
    </>
  );
};

export default LandingPage;
