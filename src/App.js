import { useEffect, useState } from "react"
import axios from 'axios';
import Footer from "./Recipe_components/Footer"
import Banner from "./Recipe_components/Banner"
import List from "./Recipe_components/List"
import Nav from "./Recipe_components/Nav"
import Copyright from "./Recipe_components/Copyright"

const RecipeApp = ()=>{
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const[keyword, setKeyword] = useState('');
  const [frecipe, setFRecipe] = useState([])
   
    useEffect (()=>{
     makeApiCall()
    }, [])
//this function will do the filtering
const handleFilter = ()=>{
  const filtered_recipes = recipes.filter((recipe)=>{
    return recipe.name.toLowerCase().includes(keyword.toLowerCase())
  })
  setFRecipe(filtered_recipes)
}
    //make the call and get the data for us
    function makeApiCall(){
      axios.get("https://dummyjson.com/recipes")
      .then(function(resp){
        console.log(resp.data.recipes)
        setLoading(false)
        setRecipes(resp.data.recipes)
      })
      .catch(function(err){
        console.log(err)
        setLoading(false);
        setError(true)
      })
    }
    return(
        <div className="container-fluid">
            <Nav/>
            <Banner setKeyword={setKeyword} keyword={keyword} handleFilter={handleFilter}/>
            <List loading={loading} error={error} recipes={recipes}  keyword={keyword} frecipe={frecipe} setFRecipe={setFRecipe}/>
            <Footer/>
            <Copyright/>

        </div>
    )
}
 export default RecipeApp;