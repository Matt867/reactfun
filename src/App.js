import './App.css';
import RecipeCard from './components/RecipeCard';
import AddRecipeForm from './components/AddRecipeForm'
import { useState } from 'react';

function App() {

  const [recipes, setRecipes] = useState([])


  function addRecipe(author, title, text) {
    const newRecipe = {author: author, title: title, text: text}
    setRecipes([...recipes, newRecipe])
  }


  return (
    <div className="App">

      <div className='centre-container'>

        <div>
          <h1>Recipes for you</h1>
        </div>

        <AddRecipeForm addRecipe={addRecipe}/>

        <div className='feed'>
          {recipes.map((recipe) => <RecipeCard title={recipe.title} text = {recipe.text} author={recipe.author}/>)}
        </div>

      </div>

    </div>
  );
}

export default App;
