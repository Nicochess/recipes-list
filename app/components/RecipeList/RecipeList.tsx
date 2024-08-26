"use client";
import { HomeGrid } from "@/app/home.styled";
import { IRecipe } from "@/types/Recipe";
import React, { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import DifficultyFilter from "../DifficultyFilter/DifficultyFilter";

interface Props {
  recipes: IRecipe[];
}

export type Difficulty = IRecipe['difficulty'] | null;

const RecipeList: React.FC<Props> = ({ recipes }) => {
  const [sortedRecipes, setSortedRecipes] = useState(recipes);
  const [difficulty, setDifficulty] = useState<Difficulty>(null);

  const flipKey = sortedRecipes.map((recipe) => recipe.id).join("-");

  return (
    <>
      <DifficultyFilter
        setSortedRecipes={setSortedRecipes}
        recipes={recipes}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <HomeGrid flipKey={flipKey}>
        {sortedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} difficulty={difficulty} />
        ))}
      </HomeGrid>
    </>
  );
};

export default RecipeList;
