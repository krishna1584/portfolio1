"use client";

import React, { useContext } from "react";
import { TileLayer } from "react-leaflet";
import { Container, Map, ContactInfo } from "./styles";
import { AiFillPhone, MdEmail } from "../../styles/Icons";
import { ThemeContext } from "styled-components";
import { motion } from "framer-motion";

function MapComp() {
  const { title } = useContext(ThemeContext);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      {title === "light-theme" ? (
        <Map center={[30.7333, 76.7794]} zoom={15} zoomControl={false}>
          <ContactInfo>
            <div>
              <p>Krishna Yadav,</p>
            </div>
            <div>
              <span>
                <AiFillPhone /> +91 8127603167
              </span>
              <span>
                <MdEmail className="email" /> krishnaydv1584@gmail.com
              </span>
            </div>
          </ContactInfo>
          <TileLayer
            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          />
        </Map>
      ) : (
        <Map center={[30.7333, 76.7794]} zoom={15} zoomControl={false}>
          <ContactInfo>
            <div>
              <p>Krishna Yadav,</p>
            </div>
            <div>
              <span>
                <AiFillPhone /> +91 8127603167
              </span>
              <span>
                <MdEmail className="email" /> krishnaydv1584@gmail.com
              </span>
            </div>
          </ContactInfo>
          <TileLayer
            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          />
        </Map>
      )}
    </Container>
  );
}

export default MapComp;
