import React, { useState } from 'react';
import { useRecipeStore } from './recipestore';

const EditRecipeForm = ({ recipe }) => {
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description" 
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
