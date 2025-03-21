import React, {useState} from 'react'


const AddRecipeForm = () => {
    const [title,setTitle] =useState('')
    const [Ingredients, setIngredients] = useState('')
    const[steps, setSteps] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newRecipe = {
            title,
            ingredients,
            steps,
        }

        console.log("Recipe Data Submitted:", newRecipe)
    }
  return (
    <div className='min-h-screen bg-slate-500 p-6'>
        <h2 className='text-3xl font-bold text-center text-black mb-6'>Add Your Recipe</h2>

        <div className='bg-white p-6 rounded-lg max-w-3xl mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>Recipe Title</label>
                    <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter Recipe Title' />
                </div>

            </form>
        </div>
    </div>
  )
}

export default AddRecipeForm