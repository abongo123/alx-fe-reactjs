import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Sorry, error loading recipes", error));
    }, []);

    return (
        <div className="min-h-screen bg-slate-500 p-6">
            <h1 className="text-3xl font-bold text-center text-black mb-6">Delicacy Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-green-200 rounded-lg shadow-lg p-4">
                        <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover rounded-md" />
                        <h2 className="text-xl font-semibold mt-4">{recipe.name}</h2>
                        <p className="text-gray-700 mt-2">{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
