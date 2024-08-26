import React from "react";
import {
  FilterButton,
  FilterContainer,
  FilterSelect,
} from "./DifficultyFilter.styled";
import { IRecipe } from "@/types/Recipe";
import { Difficulty } from "../RecipeList/RecipeList";

interface Props {
  setSortedRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
  recipes: IRecipe[];
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
}

const DifficultyFilter: React.FC<Props> = ({
  setSortedRecipes,
  recipes,
  setDifficulty,
  difficulty,
}) => {
  const sortByDifficulty = (
    a: IRecipe,
    b: IRecipe,
    difficulty: Difficulty | null
  ) => {
    if (difficulty === null) return 0;
    if (a.difficulty === difficulty && b.difficulty !== difficulty) return -1;
    if (a.difficulty !== difficulty && b.difficulty === difficulty) return 1;
    return 0;
  };

  const getFilteredRecipes = (
    recipes: IRecipe[],
    difficulty: Difficulty | null
  ) => {
    return [...recipes]
      .sort((a, b) => a.position - b.position)
      .sort((a, b) => sortByDifficulty(a, b, difficulty));
  };

  const handleFilter = (selectedDifficulty: Difficulty) => {
    const newDifficulty =
      selectedDifficulty === difficulty ? null : selectedDifficulty;
    setDifficulty(newDifficulty);
    const filteredRecipes = getFilteredRecipes(recipes, newDifficulty);
    setSortedRecipes(filteredRecipes);
  };

  return (
    <FilterContainer>
      <h3>Difficulty</h3>
      <p>You can filter recipes by difficulty.</p>
      <FilterSelect>
        <FilterButton
          $isSelected={difficulty === "easy"}
          onClick={() => handleFilter("easy")}
        >
          Easy
        </FilterButton>
        <FilterButton
          $isSelected={difficulty === "medium"}
          onClick={() => handleFilter("medium")}
        >
          Medium
        </FilterButton>
        <FilterButton
          $isSelected={difficulty === "hard"}
          onClick={() => handleFilter("hard")}
        >
          Hard
        </FilterButton>
      </FilterSelect>
    </FilterContainer>
  );
};

export default DifficultyFilter;
