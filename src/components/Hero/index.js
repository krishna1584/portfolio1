"use client";

import React from "react";
import background from "/public/static/assets/background.gif";
import {
  Container,
  Title,
  SubTitle,
  Letter,
  Wrapper,
  About,
  Background,
  ViewButton,
  ContactButton,
  HeroFooter,
  Main
} from "./styles";
import { motion } from "framer-motion";
import { BsEye, BsChat } from "../../styles/Icons";
import Link from "next/link";

function Hero() {
  return (
    <Container>
      <Background image={background} />
      <Wrapper>
        <Main>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              <Letter className="stretch">K</Letter>
              <Letter>R</Letter>
              <Letter>I</Letter>
              <Letter>S</Letter>
              <Letter>H</Letter>
              <Letter>N</Letter>
              <Letter className="stretch">A</Letter>
            </Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SubTitle>
              <Letter className="coded">Y</Letter>
              <Letter className="coded">A</Letter>
              <Letter className="coded">D</Letter>
              <Letter className="stretch coded">A</Letter>
              <Letter className="stretch coded">V</Letter>
            </SubTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotateX: 18 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <About>
              MERN <span>developer</span> building real-time products
            </About>
          </motion.div>
        </Main>
        <HeroFooter>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ViewButton href="/about">
              <BsEye /> see more about me
            </ViewButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ContactButton href="/projects">
              <BsChat /> My Work
            </ContactButton>
          </motion.div>
        </HeroFooter>
      </Wrapper>
    </Container>
  );
}

export default Hero;
