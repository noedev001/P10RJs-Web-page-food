import React from "react";
import {
  Link,
  Logo,
  NavLinks,
  Socilaicons,
  StyleNav,
  Themeicon,
} from "./navbar.styles";
import { FaMoon, FaSun, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = ({ theme, toggleTheme }) => {
  const NavItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <StyleNav initial="hidden" animate="visible" variants={NavItems}>
        <Logo variants={item}>
          Wood <span>Food</span>
        </Logo>
        <NavLinks>
          <Link href="#" variants={item}>
            All menus
          </Link>
          <Link href="#" variants={item}>
            Delivery
          </Link>
          <Link href="#" variants={item}>
            Bar
          </Link>
          <Link href="#" variants={item}>
            Contact
          </Link>
        </NavLinks>
        <Themeicon
          onClick={() => toggleTheme()}
          colortheme={theme}
          variants={item}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Themeicon>
        <Socilaicons>
          <motion.div variants={item}>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </motion.div>
        </Socilaicons>
      </StyleNav>
    </>
  );
};

export default NavBar;
