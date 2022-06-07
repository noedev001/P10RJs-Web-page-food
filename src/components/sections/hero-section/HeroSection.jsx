/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  ContactIcons,
  HeroContent,
  ImageContainer,
  StyledButtons,
  StyledHeroSection,
} from "./herosection.styles";
import img1 from "../../../assets/images/2.png";
import { FaRegEdit, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  const HeroItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 2, staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <StyledHeroSection
        initial="hidden"
        animate="visible"
        variants={HeroItems}
      >
        <HeroContent>
          <motion.h2 variants={item}>
            Spring in <span>WoodFood</span>
          </motion.h2>
          <motion.p variants={item}>The most delicius outdoor food</motion.p>
          <StyledButtons>
            <motion.button variants={item}>Capacity</motion.button>
            <motion.button variants={item}>Location</motion.button>
            <motion.button variants={item}>Seat Type</motion.button>
          </StyledButtons>
        </HeroContent>
        <ImageContainer>
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
            src={img1}
            alt="foodwood"
          />
        </ImageContainer>
        <ContactIcons>
          <motion.a
            href="#"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FaRegEdit />
          </motion.a>
          <motion.a
            href="#"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FaPhone />
          </motion.a>
        </ContactIcons>
      </StyledHeroSection>
    </>
  );
};

export default HeroSection;
