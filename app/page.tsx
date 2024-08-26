import { Container, Header, Subtitle } from "./home.styled";
import { IRecipe } from "@/types/Recipe";
import RecipeList from "./components/RecipeList/RecipeList";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  try {
    const res = await fetch(`${baseUrl}/api/recipes`);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error fetching recipes:", errorText);
      throw new Error("Failed to fetch recipes");
    }

    const recipes: IRecipe[] = await res.json();

    return (
      <>
        <Header>
          <h1>Recipes</h1>
        </Header>
        <Container>
          <Subtitle>Trending Recipes</Subtitle>
          <RecipeList recipes={recipes} />
        </Container>
      </>
    );
  } catch (error) {
    console.error("Error fetching recipes:", error);

    return (
      <>
        <Header>
          <h1>Recipes</h1>
        </Header>
        <Container>
          <Subtitle>Error fetching recipes</Subtitle>
          <p>
            There was an error retrieving the recipes. Please try again later.
          </p>
        </Container>
      </>
    );
  }
}
