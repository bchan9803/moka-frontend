import { useState, useEffect } from 'react';
import axios from 'axios';

const RecipesSec = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("https://moka-backend.onrender.com/recipes");
        setRecipes(response.data);
      }
      catch (err) {
        console.error(err);
      }
    };

    fetchRecipe();
  }, []);

  const d = new Date();
  const recipeDate = d.toDateString();

  return (
    <ul className='flex flex-col items-center mx-auto gap-24 mt-16'>
      {recipes.map((recipe) => (
        <li key={recipe._id} className='flex flex-col w-full border-2 border-black text-center gap-4 py-4 md:w-2/4'>
          {/* recipe title */}
          <div>
            <h2 className='font-bold text-3xl md:text-4xl'>{recipe.title}</h2>
            <h3>{recipeDate}</h3>
          </div>

          {/* user author */}
          <div>
            <h5 className='text-md mx-auto inline-block font-bold'>Author: {recipe.userAuthor}</h5>
          </div>

          {/* image */}
          <div>
            <img src={recipe.imageUrl} alt={recipe.title} width='100%' />
          </div>

          {/* description */}
          <div>
            <h3 className='font-bold text-lg md:text-2xl'>Description</h3>
            <h3 className='text-md md:text-lg'>{recipe.description}</h3>
          </div>

          {/* recipe time */}
          <div>
            <h3 className='font-bold text-lg md:text-2xl'>Recipe Time</h3>
            <h3 className='text-md md:text-lg'>{recipe.recipeTime}</h3>
          </div>

          {/* recipe ingredients */}
          <div>
            <h3 className='font-bold text-lg md:text-2xl'>Recipe Ingredients</h3>
            <h3 className='text-md md:text-lg'>{(recipe.ingredients).map((ingredient) => <li>- {ingredient}</li>)}</h3>
          </div>

          {/* recipe instructions */}
          <div>
            <h3 className='font-bold text-lg md:text-2xl'>Recipe Instructions</h3>
            <h3 className='text-md md:text-lg'>{(recipe.instructions).map((instruction) => <li>- {instruction}</li>)}</h3>
          </div>
        </li >
      ))}
    </ul >
  );
};

export default RecipesSec;