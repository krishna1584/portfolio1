"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 130px 0;
  gap: 80px;

  .colored {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Content = styled.div`
  width: 92vw;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 90px;
  color: ${(props) => props.theme.colors.mainText};
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 50px;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const HeroKicker = styled.span`
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.28rem;
  color: ${(props) => props.theme.colors.mainText};
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 4vw, 4.2rem);
  font-weight: 900;
  margin: 0;
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  font-weight: 700;
  margin: 0;
`;

export const HeroSummary = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
  max-width: 560px;

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const HeroImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 420px;
  border-radius: 26px;
  position: relative;
  border: 2px solid ${(props) => props.theme.colors.mainText};

  @media (max-width: 750px) {
    min-height: 320px;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  p {
    margin: 0;
    color: ${(props) => props.theme.colors.mainText};
  }
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightItem = styled.div`
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.colors.mainText};
  background: ${(props) => props.theme.colors.secundaryBackground};
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.14rem;
  }

  strong {
    font-size: 1.5rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SectionKicker = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.22rem;
`;

export const SectionHeading = styled.h3`
  font-size: clamp(1.8rem, 2.4vw, 2.6rem);
  margin: 0;
`;

export const SectionSubheading = styled.p`
  margin: 0;
  max-width: 640px;
  font-size: 1.05rem;
  line-height: 1.6;
`;

export const Timeline = styled.div`
  display: grid;
  gap: 16px;
`;

export const TimelineItem = styled.div`
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.colors.mainText};
  background: ${(props) => props.theme.colors.secundaryBackground};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TimelineMeta = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
`;

export const TimelineTitle = styled.h4`
  margin: 0;
  font-size: 1.25rem;
`;

export const TimelineBody = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Pill = styled.span`
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.mainText};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.mainText};
  background: ${(props) => props.theme.colors.secundaryBackground};
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProjectThumb = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${(props) => props.src});
  background-size: ${(props) => (props.cover ? "cover" : "contain")};
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.primaryBackground};
`;

export const ProjectBody = styled.div`
  padding: 18px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectTitle = styled.h4`
  margin: 0;
  font-size: 1.4rem;
`;

export const ProjectDesc = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const ProjectMeta = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
`;

export const SimpleList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 12px;
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 700px) {
    padding-left: 0;
    list-style-position: inside;
  }
`;

export const HighlightCard = styled.div`
  padding: 18px 20px;
  border: 2px solid ${(props) => props.theme.colors.mainText};
  background: ${(props) => props.theme.colors.secundaryBackground};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .tag {
    display: inline-block;
    padding: 6px 10px;
    font-size: 0.8rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border: 1px solid ${(props) => props.theme.colors.mainText};
    width: fit-content;
  }
`;

export const CVButton = styled.button`
  width: 100%;
  max-width: 320px;
  position: relative;
  padding: 16px 14px;
  border: 2px solid;
  border-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    )
    1;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;

  :after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    transition: all 0.3s ease;
  }

  span {
    font-size: 1.1rem;
  }

  :hover {
    span {
      color: #fff !important;
    }
  }

  :hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
`;
