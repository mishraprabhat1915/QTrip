import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* Navbar Part start here -->  */}

      <nav
       class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <motion.Link 
          whileHover={{scale:1.2}}
          class="navbar-brand" to="/">
            Navbar
          </motion.Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
            class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <motion.Link 
                whileHover={{scale:1.2}}
                class="nav-link active" aria-current="page" to="/">
                  Home
                </motion.Link>
              </li>
              <li class="nav-item">
                <motion.Link
                whileHover={{scale:1.2}}
                 class="nav-link" to="/resortpage">
                  Explore
                </motion.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
