export interface IRecipe {
  id: number;
  name: string;
  difficulty: "easy" | "medium" | "hard";
  position: number;
  imageUrl: string;
}
