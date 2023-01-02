import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <>
      {/* Navbar Part start here -->  */}

      <nav
       class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <motion.a 
          whileHover={{scale:1.2}}
          class="navbar-brand" href="/">
            Navbar
          </motion.a>
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
                <motion.a 
                whileHover={{scale:1.2}}
                class="nav-link active" aria-current="page" href="/">
                  Home
                </motion.a>
              </li>
              <li class="nav-item">
                <motion.a
                whileHover={{scale:1.2}}
                 class="nav-link" href="/ResortPage">
                  Explore
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
