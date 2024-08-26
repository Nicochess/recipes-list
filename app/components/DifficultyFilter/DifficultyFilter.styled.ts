"use client";

import styled from "styled-components";

export const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 16px;
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.filterDifficulty.subtitleColor};
    margin: 0.5em 0 2em;
  }
`;

export const FilterSelect = styled.div`
  display: flex;
  max-width: 350px;
  width: 100%;
`;

export const FilterButton = styled.button<{ $isSelected?: boolean }>`
  box-shadow: ${({ $isSelected, theme }) =>
    $isSelected
      ? theme.filterDifficulty.shadowSelected
      : theme.filterDifficulty.shadow};

  background-color: #fff;
  padding: 1em 0;
  width: 33.33%;
  border: none;
  color: ${({ theme }) => theme.black};
  font-weight: 600;
  cursor: pointer;
  z-index: ${({ $isSelected }) => ($isSelected ? 2 : 1)};

  &:first-of-type {
    border-radius: 10px 0 0 10px;
  }

  &:last-of-type {
    border-radius: 0 10px 10px 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.softHoverColor};
  }
`;
