import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { MenuToggle, Navigation } from "../common/";

import { motion } from "framer-motion";

import Logo from "../../assets/images/logo-feria.png";

const backgroundVariants = {
  open: { opacity: 1, width: 300 },
  closed: { opacity: 0, width: 0 },
};

const sizeMenuVariants = {
  open: { width: 300 },
  closed: { width: 0 },
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef(null);

  const { pathname } = useLocation();

  return (
    <header className={!(pathname === "/") ? "border-gradiant-blue" : ""}>
      <div className={isMobile ? "container" : "container-fluid"}>
        <nav className="custom-navbar">
          <motion.div
            ref={containerRef}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="motion-nav"
            variants={sizeMenuVariants}
          >
            <motion.div className="background" variants={backgroundVariants} />
            <Navigation />
            <MenuToggle toggle={() => setOpen(!isOpen)} />
          </motion.div>
          <div className="nav-menu">
            <Link to="/" className="navbar-brand">
              <img className="img-fluid" src={Logo} alt="Feria vincular 21" />
            </Link>
            {!(pathname === "/") && !(pathname === "/inicio") && (
              <Link to="/inicio" className="btn btn-white">
                <span>Ir al campus</span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
