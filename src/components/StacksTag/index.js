"use client";

import React from "react";
import styled from "styled-components";
import { FaReact, FaPython } from "react-icons/fa";
import { SiMysql, SiMongodb, SiJavascript, SiCplusplus } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { Container } from "./styles";

function StacksTag({ title }) {
  const stacks = {
    react: {
      id: 1,
      icon: <FaReact size={15} />,
      name: "React JS",
      backgroundColor: "#61DAFB",
      textColor: "#000000",
    },
    javascript: {
      id: 2,
      icon: <SiJavascript size={15} />,
      name: "JavaScript",
      backgroundColor: "#F0DB4F",
      textColor: "#000000",
    },
    sql: {
      id: 3,
      icon: <SiMysql size={15} />,
      name: "MySQL",
      backgroundColor: "#00758F",
      textColor: "#FFFFFF",
    },
    css: {
      id: 4,
      icon: <DiCss3 size={15} />,
      name: "CSS",
      backgroundColor: "#264DE4",
      textColor: "#FFFFFF",
    },
    mongo: {
      id: 5,
      icon: <SiMongodb size={15} />,
      name: "MongoDB",
      backgroundColor: "#4DB33D",
      textColor: "#FFFFFF",
    },
    cplusplus: {
      id: 6,
      icon: <SiCplusplus size={15} />,
      name: "C++",
      backgroundColor: "#00599C",
      textColor: "#FFFFFF",
    },
    python: {
      id: 7,
      icon: <FaPython size={15} />,
      name: "Python",
      backgroundColor: "#3776AB",
      textColor: "#FFFFFF",
    },
  };


  const stack = stacks[title];

  return (
    <Container
      backgroundColor={stack?.backgroundColor}
      textColor={stack?.textColor}
    >
      {stack && (
        <>
          {stack.icon}
          <span>{stack.name}</span>
        </>
      )}
    </Container>
  );
}

export default StacksTag;