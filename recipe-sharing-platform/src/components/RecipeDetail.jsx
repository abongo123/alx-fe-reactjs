import React,{ useState,useEffect} from "react"
import { useParams } from "react-router-dom"

const RecipeDetail =() => {
    const { id } = useParams()
    const[recipe, setRecipe] = useState(null)

    useEffect(() => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
            const foundRecipe = data.find((r) =>r.id) === parseInt((id))
            setRecipe(foundRecipe)
        })
        .catch((error) => console,error("Eror Loading recipe", error))
    }, [id])

    if (!recipe) {
        return <p className="text-center text-red-500 text-xl">Loading recipe....</p>
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
            <h1 className="text-3xl font-bold text-center text-green-600">{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-lg my-4" />
    
            <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
    
            <h2 className="text-xl font-semibold mt-4">Cooking Instructions</h2>
            <p className="text-gray-700 mt-2">{recipe.instructions}</p>
    
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Back to Recipes
            </button>
          </div>
        </div>
      );
    };   

export default RecipeDetail