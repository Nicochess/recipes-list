"use client";

import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.article<{ $isSelected?: boolean }>`
  border: 2px solid
    ${({ $isSelected, theme }) =>
      $isSelected ? theme.selectedColor : theme.card.titleColor};

  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 25px;
  overflow: hidden;
`;

export const CardImage = styled(Image)`
  height: auto;
  width: 100%;
`;

export const CardDescription = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0.7em 0.7em 1em;
  background-color: #fff;

  h4 {
    color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.selectedColor : theme.black};

    margin: 0 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.card.subtitleColor};
    text-transform: capitalize;
  }
`;
