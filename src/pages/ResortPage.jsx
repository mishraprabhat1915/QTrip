import React from "react";
import "../css/ResortPage.css";
import { motion } from "framer-motion";
import resortImage1 from "../assets/descriptions/resort1.jpg"
import resortImage2 from "../assets/descriptions/resort2.jpg"
import resortImage3 from "../assets/descriptions/resort3.jpg"
const ResortPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 left-col">
            <div className="row list-images">
              <div className="col-lg-6 col-md-6 col-sm-12 Resort-images1">
                <motion.img      whileHover={{scale:0.9}}
                  src={resortImage1}
                  alt="firstPic"
                />
              </div>
              <div className="col-lg-6 col-md-6 d-none d-lg-block d-md-block d-flex flex-column ">
                <div className="row Resort-images2">
                  <motion.img      whileHover={{scale:0.9}}
                    src={resortImage2}
                    alt="secondPic"
                  />
                </div>
                <div className="row Resort-images3">
                  <motion.img      whileHover={{scale:0.9}}
                    src={resortImage3}
                    alt="thirdPic"
                  />
                </div>
              </div>
            </div>
            <div className="row heading-section">
              <h1>Sunshine Resort</h1>
              <h4>Relax and unwind yourself</h4>
            </div>
            <hr></hr>
            <div className="row list-resort">
              <h2>About the Experience</h2>
              <p>
                Chairmans Jade Resort is constructed in the most natural setting
                for a day out that pleases the senses. The property is spread
                over eight acres of land with facilities for both indoor and
                outdoor adventures. Get active in the pool with a game of water
                polo or try some archery. For the indoor sort, there are a host
                of popular games and adventures. If that is not enticing enough
                head to the gymnasium!
              </p>
              <ul>
                <h4>Inclusions</h4>
                <li>Parking</li>
                <li>Swimming pool access</li>
                <li>
                  Outdoor sports - Water Polo, Archery, Tennis, and Zorbing
                </li>
                <li>
                  Indoor games - Indoor Squash, Table Tennis, Carrom, Badminton,
                  Chess, Billiards, and X-Box 360 KINECT
                </li>
              </ul>
              <ul>
                <h4>Know before you go</h4>
                <li>
                  Game accessories like balls and shuttlecocks will need to be
                  purchased
                </li>
                <li>
                  Nylon swimwear must be worn at all times when using the
                  swimming pool
                </li>
                <li>
                  Children must be accompanied by parents or guardians at all
                  times
                </li>
                <li>
                  Complimentary entry for children below the height of three
                  feet A valid photo ID is mandatory to enter the resort
                </li>
              </ul>
              <ul>
                <h4>Not included</h4>
                <li>Swimwear</li>
                <li>Pickup and drop</li>
                <li>Towel</li>
              </ul>
            </div>
          </div>

          {/* Second part of row */}
          <div className="col-lg-4 col-md-4 col-sm-12 border right-col sticky-top">
            <motion.div 
            whileHover={{scale:1.2,background: "#FF0000"}}
            className="row first-row">Sold Out!</motion.div>
            <hr></hr>
            <div className="row second-row">
              <p>
                This adventure is currently sold out. But there's a lot more to
                <span>explore</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResortPage;
