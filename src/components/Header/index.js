"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Title,
  HeaderMenu,
  SocialMedias,
  EntraptaWrapper,
  ContainerEye,
  Eyes,
  Light,
  Wrapper,
  MobileHeader,
  DesktopHeader,
  Menu,
  MobileContainer,
  BackText
} from "./styles";
import {
  BsGithub,
  BsLinkedin,
} from "../../styles/Icons";
import Link from "next/link";
import { ThemeContext } from "styled-components";
import nookies from "nookies";
import ThemeSwitcher from "../ThemeSwitcher";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

function Header(props) {
  const [fixed, setFixed] = useState(false);
  const { title } = useContext(ThemeContext);
  const [theme, setTheme] = useState();
  const [open, setOpen] = useState();

  useEffect(() => {
    const { theme } = nookies.get("theme");
    setTheme(theme);
  }, [theme]);

  if (typeof window !== "undefined") {
    function setHeaderFixed() {
      if (window.scrollY >= 1) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener("scroll", setHeaderFixed);
  }

  return (
    <Container active={fixed} open={open}>
      <Wrapper>
        <Title href="/" aria-label="Back home">
          <EntraptaWrapper>
            <ContainerEye>
              <Eyes>
                <Light />
              </Eyes>
              <Eyes>
                <Light />
              </Eyes>
            </ContainerEye>
          </EntraptaWrapper>
          <BackText className="back-text">Back home</BackText>
        </Title>
        <DesktopHeader>
          <HeaderMenu>
            <ul>
              <li>
                <Link href="/about">
                  <span>01. </span> About
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span>02. </span> Projects
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span>03. </span> Contact
                </Link>
              </li>
            </ul>
            <ThemeSwitcher onClick={props.toggleTheme} checked={title} />
            <SocialMedias>
              <BsGithub
                onClick={() =>
                  window.open("https://github.com/krishna1584", "_blank").focus()
                }
                size={17}
              />
              <BsLinkedin
                onClick={() =>
                  window
                    .open("https://www.linkedin.com/in/krishna-yadav20/", "_blank")
                    .focus()
                }
                size={17}
              />
            </SocialMedias>
          </HeaderMenu>
        </DesktopHeader>
        <MobileContainer>
          <Menu className="menu">
            <Hamburger toggled={open} toggle={setOpen} />
          </Menu>
          {open && (
            <MobileHeader key={Math.random()}>
              <ul>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Link href="/about" onClick={() => setOpen(false)}>
                    <span>01. </span> About
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Link href="/projects" onClick={() => setOpen(false)}>
                    <span>02. </span> Works
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <span>03. </span> Contact
                  </Link>
                </motion.li>
              </ul>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <SocialMedias>
                  <BsGithub
                    onClick={() =>
                      window
                        .open("https://github.com/krishna1584", "_blank")
                        .focus()
                    }
                    size={17}
                  />
                  <BsLinkedin
                    onClick={() =>
                      window
                        .open(
                          "https://www.linkedin.com/in/krishna-yadav20/",
                          "_blank"
                        )
                        .focus()
                    }
                    size={17}
                  />
                  <ThemeSwitcher onClick={props.toggleTheme} checked={title} />
                </SocialMedias>
              </motion.div>
            </MobileHeader>
          )}
        </MobileContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;
