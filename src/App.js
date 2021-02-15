import React,{useEffect,useState} from 'react';
import Recipe from "./components/recipe"
import './App.css';

function App() {

  const API_ID = "59cad118";
  const API_KEY = "92000a50c0fcb54acc66b3b595bd35c7";

  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [Query, setQuery] = useState("chicken");

 useEffect(() => {
   fetchData();
 }, [Query])

  const updateSearch=(e)=>{
    setSearch(e.target.value)
  }
  const getSearch=e=>{
    e.preventDefault()
    setQuery(search)
    setSearch("")

  }

  const fetchData = async ()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${Query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data =  await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }
  return (
    <div className="App">
      <form onSubmit={getSearch}
        className="search__form">
      <input 
       type="text"
       className="search__bar" 
       value={search} 
       onChange={updateSearch}/>

      <button type="submit" className="search__btn">search</button>
      </form>
      <div className="recipe__container">
      {recipes.map(recipe=>(

        <Recipe 
        key={recipe.recipe.label}

        image={recipe.recipe.image} 
        title={recipe.recipe.label} 
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}
export default App;
