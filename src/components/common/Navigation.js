import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavLink } from "react-router-dom";

const variants = {
  open: {
    zIndex: 1,
    width: "95%",
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  closed: {
    zIndex: -99,
    width: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {/*itemIds.map((i) => (
      <MenuItem key={i}>{i}</MenuItem>
    ))*/}

    <MenuItem>
      <NavLink
        activeClassName="active"
        className="text-white text-decoration-none"
        exact
        to="/emprendimientos"
      >
        Emprendimientos
      </NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink
        activeClassName="active"
        className="text-white text-decoration-none"
        exact
        to="/empresas"
      >
        Empresas
      </NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink
        activeClassName="active"
        className="text-white text-decoration-none"
        exact
        to="/auditorio"
      >
        Auditorio
      </NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink
        activeClassName="active"
        className="text-white text-decoration-none"
        exact
        to="/rondas-vinculacion"
      >
        Rondas de vinculación
      </NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink
        activeClassName="active"
        className="text-white text-decoration-none"
        exact
        to="/presentacion-oportunidades"
      >
        Empresas PDO
      </NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink
        activeClassName="active"
        className="text-white text-decoration-none"
        exact
        to="/posters"
      >
        Posters
      </NavLink>
    </MenuItem>
  </motion.ul>
);

// const itemIds = [
//   "Emprendimientos",
//   "Auditorio",
//   "Empresas",
//   "Rondas de vinculación",
//   "Empresas PDO",
//   "Posters",
// ];
