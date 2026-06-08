"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import nookies from "nookies";

import StyledComponentsRegistry from "./StyledComponentsRegistry";
import GlobalStyle from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import Header from "../components/Header";
import CustomCursor from "../components/CustomCursor";
import Scene from "../components/Scene";
import lines from "/public/static/assets/back.png";

function Providers({ children }) {
  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    const { theme: savedTheme } = nookies.get("theme");

    if (savedTheme) {
      setTheme(savedTheme === '"dark"' ? dark : light);
    } else {
      nookies.set(null, "theme", JSON.stringify("dark"), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        sameSite: "lax",
      });
    }
  }, []);

  const toggleTheme = () => {
    const { theme: savedTheme } = nookies.get("theme");
    const nextTheme = savedTheme === '"dark"' ? "light" : "dark";

    nookies.set(null, "theme", JSON.stringify(nextTheme), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
      sameSite: "lax",
    });

    setTheme(nextTheme === "dark" ? dark : light);
  };

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Lines image={lines} />
        {theme === dark ? (
          <CanvasContainer>
            <Canvas
              camera={{ fov: 70, position: [0, 0, 30] }}
              onCreated={({ size, camera }) => {
                if (size.width < 600) {
                  camera.position.z = 45;
                }
              }}
            >
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
                rotateSpeed={0.1}
              />
              <Scene />
            </Canvas>
          </CanvasContainer>
        ) : null}
        <CustomCursor />
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

const Lines = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent url(${(props) => props.image.src});
  background-repeat: space;
  background-size: 80vh;
  background-repeat: repeat-y;
  background-position: 0px 80px;
  opacity: 0.01;
  visibility: visible;
  z-index: -1;
  top: 0;
  left: 50px;
  overflow: hidden;
`;

const CanvasContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  visibility: visible;
  background-color: transparent;
  opacity: 0.1;
  z-index: -1;
`;

export default Providers;
