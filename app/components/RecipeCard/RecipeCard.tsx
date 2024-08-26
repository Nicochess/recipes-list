import React from "react";
import { CardContainer, CardDescription, CardImage } from "./RecipeCard.styled";
import { IRecipe } from "@/types/Recipe";
import { Flipped } from "react-flip-toolkit";
import { Difficulty } from "../RecipeList/RecipeList";

interface Props {
  recipe: IRecipe;
  difficulty: Difficulty;
}

const RecipeCard: React.FC<Props> = ({ recipe, difficulty }) => (
  <Flipped flipId={recipe.name}>
    <CardContainer $isSelected={difficulty === recipe.difficulty}>
      <CardImage
        src={recipe.imageUrl}
        width={492}
        height={600}
        priority
        loading="eager"
        alt="Photo of Classic Burguer"
      />

      <CardDescription $isSelected={difficulty === recipe.difficulty}>
        <h4>{recipe.name}</h4>
        <p>{recipe.difficulty}</p>
      </CardDescription>
    </CardContainer>
  </Flipped>
);

export default RecipeCard;
