import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* Navbar Part start here -->  */}

      <nav
        class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <motion.div
            whileHover={{ scale: 1.2 }}
          >
            <Link
              class="navbar-brand" to="/">
              Navbar
            </Link>
          </motion.div>

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
              <motion.li
                whileHover={{ scale: 1.2 }}
                class="nav-item">
                <Link
                  class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                class="nav-item">
                <Link

                  class="nav-link" to="/resortpage">
                  Explore
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
