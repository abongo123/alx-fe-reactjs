import React from 'react';
import { useParams } from "react-router-dom";
import {useRecipeStore} from './recipestore'
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';


const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find((r) => r.id === parseInt(id))
    );

    if (!recipe) {
      return<p>Sorry! Not Found!</p>
    }

      return (
        <div>
          <h2>{recipe.name}</h2>
          <p>Ingredients: {recipe.ingredients.join(',')}</p>

          <Link to={`/edit${recipe.id}`}>
          <button>Edit Recipe</button>
          </Link>
          <DeleteRecipeButton id={recipe.id}/>
          <Link to="/">Back</Link>
        </div>

      )
    }


export default RecipeDetails