import { useRecipeStore } from './recipeStore';
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes());
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const favorites =useRecipeStore(state => state.favorites);

  return (
    <div>
      <h2>Recipe List</h2>

      <input 
        type="text" 
        placeholder="Search recipes" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {favorites.some(fav => fav.id === recipe.id) ? (
                <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
              ) : (
                <button onClick={() => addFavorite(recipe)}>Add to Favorites</button>)}
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
