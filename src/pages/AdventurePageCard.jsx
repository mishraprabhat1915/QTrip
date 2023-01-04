import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
const AdventurePageCard = (props) => {
  return (
    <>
      <motion.div
      whileHover={{scale:0.9}}
       className="col-lg-3 col-md-3 col-sm-6 gy-4">
        <Link to="/resortpage">
          <div class="card" key={props.id} style={{ width: "18rem" }}>
            <img src={props.image} class="" alt="{props.place}" />
            <div class="card-body">
              <motion.h1    whileHover={{ x: 20, scale:1.2 }} class="card-text">{props.place}</motion.h1>
              <motion.p   whileHover={{ x: 20, scale:1.2 }} class="card-text">Rs.{props.price}</motion.p>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default AdventurePageCard;
