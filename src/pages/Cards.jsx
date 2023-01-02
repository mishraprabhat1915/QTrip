import React from "react";
import { motion } from "framer-motion";
const Cards = (props) => {
  return (
    <>
      <motion.div 
      whileHover={{scale:0.9}}
      className="col-lg-3  col-md-6 col-sm-6  gy-4 ">
        <a href="./AdventurePage">
          <div class="tiles" key={props.id}>
            <img
              className="tile-img-top" src={props.image} alt="bengaluru" />
            <div class="tile-body">
              <motion.h2 
              whileHover={{ x: 20,scale:1.2 }}
               class="tile-text">{props.city_name}</motion.h2>
              <motion.p 
              whileHover={{ x: 20, scale:1.2 }}
              class="tile-text">{props.places}+ Places</motion.p>
            </div>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default Cards;
