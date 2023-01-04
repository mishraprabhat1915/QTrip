import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
const Cards = (props) => {
  return (
    <>
      <motion.div 
      whileHover={{scale:0.9}}
      className="col-lg-3  col-md-6 col-sm-6  gy-4 ">
        <Link to="/adventurepage">
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
        </Link>
      </motion.div>
    </>
  );
};

export default Cards;
