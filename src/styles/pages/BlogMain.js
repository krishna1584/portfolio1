"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 130px 0;
  margin: 0 auto;
  gap: 40px;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ComingSoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ComingSoonTitle = styled.h1`
  font-size: 3rem;
  color: #0070f3;
  margin-bottom: 1rem;
`;

export const ComingSoonText = styled.p`
  font-size: 1.5rem;
  color: #333;
  max-width: 500px;
  line-height: 1.6;
`;
