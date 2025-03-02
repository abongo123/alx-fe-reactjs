import React from 'react';
import {useRecipeStore} from './recipestore'
import { useState } from 'react';

const EditRecipeForm = ({recipe}) => {
  const[formData, setForData] = useState({
    title: recipe.title,
    description: recipe.description
  })

  const updateRecipe = useRecipeStore(state => state.updateRecipe)

  const handleChange =(e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, formData)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' value={formData} onChange={handleChange} required/>
      <textarea name='Decscription' value={formData.description} onChange={handleChange} required/>
      <button type='submit'>Save Changes</button>
    </form>
  )
}

export default EditRecipeForm