"use client";

import React from "react";
import PageTitle from "../../components/PageTitle";
import {
  Container,
  Content,
  Hero,
  HeroText,
  HeroKicker,
  HeroTitle,
  HeroSubtitle,
  HeroSummary,
  HeroImage,
  ActionRow,
  HighlightsGrid,
  HighlightItem,
  Section,
  SectionHeader,
  SectionKicker,
  SectionHeading,
  SectionSubheading,
  Timeline,
  TimelineItem,
  TimelineMeta,
  TimelineTitle,
  TimelineBody,
  PillRow,
  Pill,
  ProjectGrid,
  ProjectCard,
  ProjectThumb,
  ProjectBody,
  ProjectTitle,
  ProjectDesc,
  ProjectMeta,
  SimpleList,
  HighlightCard,
  CVButton,
} from "../../styles/pages/About";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiSpring,
} from "react-icons/si";

export default function AboutClient() {
  const highlights = [
    { label: "Experience", value: "3+ years" },
    { label: "Projects", value: "15+ builds" },
    { label: "CGPA", value: "8.59" },
    { label: "Patent", value: "Filed" },
  ];

  const experience = [
    {
      time: "2025 - Present",
      title: "Project Team Leader — StreamPay & CivicSense",
      description:
        "Led real-time platforms with payments, notifications, analytics, PostgreSQL, Prisma, Redis, and Socket.IO.",
    },
    {
      time: "2023 - Present",
      title: "B.E. Computer Science — Chitkara University",
      description:
        "CGPA 8.59. Focus areas include Operating Systems, DSA, DBMS, Linux, Computer Networking, and OOP.",
    },
    {
      time: "2024",
      title: "Content Head — GeeksforGeeks Student Chapter (CUIET)",
      description:
        "Owned content strategy, community initiatives, and learning sessions for peer developers.",
    },
    {
      time: "2024",
      title: "Open-source Contributor — Hacktoberfest",
      description:
        "Contributed fixes and features across community-driven repositories.",
    },
  ];

  const skills = [
    { label: "C++", icon: <SiCplusplus /> },
    { label: "Java", icon: <FaJava /> },
    { label: "Python", icon: <IoLogoPython /> },
    { label: "JavaScript", icon: <IoLogoJavascript /> },
    { label: "React", icon: <FaReact /> },
    { label: "Next.js", icon: <SiNextdotjs /> },
    { label: "Node.js", icon: <SiNodedotjs /> },
    { label: "Express", icon: <SiExpress /> },
    { label: "PostgreSQL", icon: <SiPostgresql /> },
    { label: "MongoDB", icon: <SiMongodb /> },
    { label: "MySQL", icon: <SiMysql /> },
    { label: "Redis", icon: <SiRedis /> },
    { label: "Prisma", icon: <SiPrisma /> },
    { label: "Spring Boot", icon: <SiSpring /> },
  ];

  const projects = [
    {
      name: "StreamPay",
      date: "May 2026",
      description:
        "Real-time creator monetization with event-driven donations, analytics, and Razorpay payments.",
      href: "https://streampaye.vercel.app/",
      image: "/static/projects/streampay.png",
    },
    {
      name: "CivicSense",
      date: "Apr 2026",
      description:
        "Civic issue reporting with live updates for status, comments, and votes.",
      href: "https://civicsensee.vercel.app/",
      image: "/static/projects/civicsense.png",
    },
    {
      name: "CuraSync",
      date: "Dec 2025",
      description:
        "Hospital SaaS with role-based access and OCR-driven automation.",
      href: "https://curasync1.vercel.app/",
      image: "/static/projects/curasync.png",
    },
    {
      name: "Finexus",
      date: "Sep 2024",
      description:
        "Microservices banking platform with secure APIs, service discovery, and JWT auth.",
      href: "https://github.com/krishna1584/Finexus",
      image: "/static/projects/finexus.png",
    },
    {
      name: "NFT Marketplace",
      date: "Oct 2024",
      description:
        "Marketplace to mint, buy, and sell NFTs with wallet integration and real-time listings.",
      href: "https://telosnft.vercel.app/",
      image: "/static/projects/telosnft.png",
    },
    {
      name: "TradeX",
      date: "Sep 2024",
      description:
        "Indian stock market tracking with real-time analysis and insights.",
      href: "https://github.com/krishna1584/TradeX",
      image: "/static/projects/tradex.png",
      cover: true,
    },
    {
      name: "ISRO WEB",
      date: "May 2023",
      description: "Modernized concept website for ISRO.",
      href: "https://isro-website1.netlify.app/",
      image: "/static/projects/isro.png",
      cover: true,
    },
    {
      name: "Tourify",
      date: "Mar 2024",
      description: "Indian tourism website with curated destinations.",
      href: "https://tourify1.netlify.app/",
      image: "/static/projects/tourify.png",
      cover: true,
    },
    {
      name: "Hangman Game",
      date: "Dec 2023",
      description: "A classic word guessing game built for the web.",
      href: "https://hangman-game-nine-tan.vercel.app/",
      image: "/static/projects/hangman.png",
      cover: true,
    },
  ];

  return (
    <Container>
      <PageTitle
        title="about"
        stretchedLetter="b"
        overlayTitle="about | experience | projects"
      />
      <Content>
        <Hero>
          <HeroText>
            <HeroKicker>About</HeroKicker>
            <HeroTitle>Krishna Yadav</HeroTitle>
            <HeroSubtitle>
              MERN & <span className="colored">Full-Stack</span> Developer
            </HeroSubtitle>
            <HeroSummary>
              I design and ship scalable web products with Next.js, Node.js,
              and modern databases. I focus on real-time features, secure
              authentication, and clean API design for products that move fast
              without breaking.
            </HeroSummary>
            <ActionRow>
              <CVButton
                as="a"
                href="/static/files/curriculum_vitae.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>Download CV</span>
              </CVButton>
              <p>Open to full-time roles and product collaborations.</p>
            </ActionRow>
          </HeroText>
          <HeroImage src="/static/assets/pfp.jpg" />
        </Hero>

        <HighlightsGrid>
          {highlights.map((item) => (
            <HighlightItem key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </HighlightItem>
          ))}
        </HighlightsGrid>

        <Section>
          <SectionHeader>
            <SectionKicker>Experience</SectionKicker>
            <SectionHeading>Leading teams and shipping products</SectionHeading>
            <SectionSubheading>
              A blend of leadership, engineering, and community work across
              real-time platforms and campus initiatives.
            </SectionSubheading>
          </SectionHeader>
          <Timeline>
            {experience.map((item) => (
              <TimelineItem key={item.title}>
                <TimelineMeta>{item.time}</TimelineMeta>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineBody>{item.description}</TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>

        <Section>
          <SectionHeader>
            <SectionKicker>Skills</SectionKicker>
            <SectionHeading>Tools I build with</SectionHeading>
            <SectionSubheading>
              Focused on modern web stacks, dependable backends, and data
              systems that scale.
            </SectionSubheading>
          </SectionHeader>
          <PillRow>
            {skills.map((skill) => (
              <Pill key={skill.label}>
                {skill.icon}
                {skill.label}
              </Pill>
            ))}
          </PillRow>
        </Section>

        <Section>
          <SectionHeader>
            <SectionKicker>Projects</SectionKicker>
            <SectionHeading>Flagship builds and experiments</SectionHeading>
            <SectionSubheading>
              A snapshot of my product work across fintech, civic tech, health
              SaaS, and web experiences.
            </SectionSubheading>
          </SectionHeader>
          <ProjectGrid>
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <ProjectThumb src={project.image} cover={project.cover} />
                <ProjectBody>
                  <ProjectMeta>{project.date}</ProjectMeta>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                </ProjectBody>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Section>

        <Section>
          <SectionHeader>
            <SectionKicker>Certifications</SectionKicker>
            <SectionHeading>Verified learning milestones</SectionHeading>
          </SectionHeader>
          <SimpleList>
            <li>Nutanix Certified Associate</li>
            <li>Red Hat System Administration I (RH124)</li>
            <li>Cisco AI</li>
            <li>Cisco Cybersecurity</li>
          </SimpleList>
        </Section>

        <Section>
          <SectionHeader>
            <SectionKicker>Achievements</SectionKicker>
            <SectionHeading>Highlights that matter</SectionHeading>
          </SectionHeader>
          <HighlightCard>
            <span className="tag">Patent</span>
            Filed a patent for an Automatic Shoe Cleaning Machine.
          </HighlightCard>
          <SimpleList>
            <li>Top 50 at HackIndia Hackathon 2024 (college level)</li>
            <li>Built an NFT Marketplace during HackIndia 2024</li>
            <li>LeetCode contest rating: 1723</li>
            <li>Star Programmer award (top 40 of 2500+ students)</li>
          </SimpleList>
        </Section>
      </Content>
    </Container>
  );
}
