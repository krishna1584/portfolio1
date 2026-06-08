import React from "react";
import {
  Container,
  ProjectWrapper,
  AppDetails,
  Thumbnail,
  DateContainer,
  ThumbnailWrapper,
  ProjectsMain,
} from "../../styles/pages/Projects";
import PageTitle from "../../components/PageTitle";

export const metadata = {
  title: "Krishna Yadav — Projects",
};

function ProjectsPage() {
  return (
    <Container>
      <PageTitle
        title="projects"
        stretchedLetter="r"
        overlayTitle="Builds | Products | Experiments"
      />

      <ProjectsMain>
        <ProjectWrapper
          as="a"
          href="https://streampaye.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>MAY, 2026</span>
                <div className="line"></div>
              </DateContainer>
              <h1>StreamPay</h1>
              <h2>
                Real-time creator monetization with event-driven donations,
                analytics, and Razorpay payments.
              </h2>
            </AppDetails>
            <Thumbnail src="/static/projects/streampay.png" className="thumb" />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://civicsensee.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>APRIL 2026</span>
                <div className="line"></div>
              </DateContainer>
              <h1>CivicSense</h1>
              <h2>
                Civic issue reporting platform with live updates for status,
                comments, and votes.
              </h2>
            </AppDetails>
            <Thumbnail src="/static/projects/civicsense.png" className="thumb" />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://curasync1.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>DECEMBER, 2025</span>
                <div className="line"></div>
              </DateContainer>
              <h1>CuraSync</h1>
              <h2>
                SaaS hospital management with role-based access and OCR-driven
                document automation.
              </h2>
            </AppDetails>
            <Thumbnail src="/static/projects/curasync.png" className="thumb" />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://github.com/krishna1584/Finexus"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>SEPTEMBER, 2024</span>
                <div className="line"></div>
              </DateContainer>
              <h1>Finexus</h1>
              <h2>
                Microservices banking platform with secure APIs, service
                discovery, and JWT auth.
              </h2>
            </AppDetails>
            <Thumbnail src="/static/projects/finexus.png" className="thumb" />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://telosnft.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>OCTOBER, 2024</span>
                <div className="line"></div>
              </DateContainer>
              <h1>NFT Marketplace</h1>
              <h2>
                Decentralized marketplace to mint, buy, and sell NFTs with
                wallet integration and real-time listings, tuned for
                performance.
              </h2>
            </AppDetails>
            <Thumbnail src="/static/projects/telosnft.png" className="thumb" />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://github.com/krishna1584/TradeX"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>SEPTEMBER, 2024</span>
                <div className="line"></div>
              </DateContainer>
              <h1>TradeX</h1>
              <h2>
                Dive into the Indian stock market with real-time analysis and
                market insights.
              </h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/tradex.png"
              className="thumb cover"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://isro-website1.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>MAY, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>ISRO WEB</h1>
              <h2>A modernized concept website for ISRO.</h2>
            </AppDetails>
            <Thumbnail src="/static/projects/isro.png" className="thumb cover" />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://tourify1.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>MARCH, 2024</span>
                <div className="line"></div>
              </DateContainer>
              <h1>Tourify</h1>
              <h2>Indian tourism website with curated destinations.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/tourify.png"
              className="thumb cover"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper
          as="a"
          href="https://hangman-game-nine-tan.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>DECEMBER, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>Hangman Game</h1>
              <h2>A classic word guessing game built for the web.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/hangman.png"
              className="thumb cover"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>
      </ProjectsMain>
    </Container>
  );
}

export default ProjectsPage;
