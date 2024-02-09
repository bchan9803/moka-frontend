import { useState } from 'react';
import { useGetUserId } from '../hooks/useGetUserId.ts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddRecipeFormInputField from './AddRecipeFormInputField.tsx';

const AddRecipeForm = () => {
  const userId = useGetUserId();

  const [recipe, setRecipe] = useState({
    title: "",
    userAuthor: "",
    userAuthorId: userId,
    imageUrl: "",
    description: "",
    recipeTime: "",
    ingredients: [],
    instructions: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (e, ingredientIndex) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[ingredientIndex] = value;
    setRecipe({ ...recipe, ingredients: ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleInstructionChange = (e, instructionIndex) => {
    const { value } = e.target;
    const instructions = recipe.instructions;
    instructions[instructionIndex] = value;
    setRecipe({ ...recipe, instructions: instructions });
  };

  const addInstruction = () => {
    setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
  };


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("https://moka-backend.onrender.com/recipes", recipe);
      alert("Recipe Created!");
      console.log('recipe created');
      navigate('/');
    }
    catch (err) {
      console.error(err);
    }
  };

  console.log(recipe);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <div className='border-2 p-8'>
        <AddRecipeFormInputField
          formLabel='Title'
          formType="text"
          formId='title'
          formName='title'
          formPlaceholder='Title'
          formOnChange={handleChange}
        />
        <AddRecipeFormInputField
          formLabel='Author'
          formType="text"
          formId='userAuthor'
          formName='userAuthor'
          formPlaceholder='User Author'
          formOnChange={handleChange}
        />
        <AddRecipeFormInputField
          formLabel='Image Url'
          formType="text"
          formId='imageUrl'
          formName='imageUrl'
          formPlaceholder='imageUrl'
          formOnChange={handleChange}
        />
        <AddRecipeFormInputField
          formLabel='Description'
          formType="text"
          formId='description'
          formName='description'
          formPlaceholder='description'
          formOnChange={handleChange}
        />
        <AddRecipeFormInputField
          formLabel='Recipe Time'
          formType="text"
          formId='recipeTime'
          formName='recipeTime'
          formPlaceholder='Recipe Time'
          formOnChange={handleChange}
        />

        {/* add ingredient */}
        <div className="label text-lg font-bold">
          <span className='label-text'>Ingredients</span>
        </div>
        {/* create new ingredient input field */}
        {recipe.ingredients.map((ingredient, ingredientIndex) => (
          <input
            className='flex flex-col items-center mb-4 input input-bordered w-full max-w-xs'
            key={ingredientIndex}
            type='text'
            placeholder='Item'
            name='ingredients'
            value={ingredient}
            onChange={(e) => handleIngredientChange(e, ingredientIndex)}
          />
        ))}
        {/* add ingredient btn */}
        <button type='button' onClick={addIngredient} className='btn p-2'>+ Add Ingredient</button>

        {/* add recipe instructions */}
        <div className="label text-lg font-bold">
          <span className='label-text'>Instructions</span>
        </div>
        {/* create new recipe instruction input field */}
        {recipe.instructions.map((instruction, instructionIndex) => (
          <input
            className='flex flex-col items-center mb-4 input input-bordered w-full max-w-xs'
            key={instructionIndex}
            type='text'
            placeholder='Instruction'
            name='instructions'
            value={instruction}
            onChange={(e) => handleInstructionChange(e, instructionIndex)}
          />
        ))}
        {/* add instruction btn */}
        <button type='button' onClick={addInstruction} className='btn p-2'>+ Add Instruction</button>

        {/* submit btn */}
        <div className='mt-8'>
          <button type='submit' className="btn btn-primary p-2 mx-auto flex">Create Recipe</button>
        </div>
      </div>
    </form>
  );
};

export default AddRecipeForm;