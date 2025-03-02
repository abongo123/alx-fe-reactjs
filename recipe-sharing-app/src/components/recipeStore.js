import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  deleteRecipeL: (id) =>
    set ((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !==id)
    })),

    updateRecipe: (id,updateRecipe) =>
        set((state) => ({recipes: state.recipes.map((recipe) => 
        recipe.id ==id ? {...recipe, ...updateRecipe} : recipe),
    })),
      setSearchTerm: (term) => set({ searchTerm: term }),
  
    recommendations: [],
    generateRecommendation: () => set(state => {
        const recommended = state.recipes.filter(recipe =>
            state.favourites.includes (recipe.id) && Math.random()
            >0.5
        )
    })
}));

export default useRecipeStore;

