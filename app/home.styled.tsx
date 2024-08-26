"use client";
import { Flipper } from "react-flip-toolkit";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: #f9f9f9;
  justify-content: center;
  padding: 0 1em;

  h1 {
    max-width: 800px;
    width: 100%;
    text-align: left;
  }
`;

export const Container = styled.main`
  max-width: 800px;
  padding: 0 1em;
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin: 1em 0;
`;

export const HomeGrid = styled(Flipper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  padding: 0 0 2em;

  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
`;
