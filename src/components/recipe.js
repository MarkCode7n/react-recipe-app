import React from 'react'
import style from "./recipe.module.css" 
const Recipe=({image,title,ingredients})=>{
return(
        <div className={style.recipe}>
        <div className={style.recipeImage}>
            <img src={image} alt="" className={style.image}/>
        </div>
        <div className="recipe__title">
            <h3 className={style.recipeTitle}>{title}</h3>
        </div>

        <div className="recipe__ingredients">
            <ol>
                <h3 className={style.recipeIngH}>Ingredients :</h3>
                <div className={style.recipeIngredients}>
                {ingredients.map(i=>(<li>{i.text}</li>))}
                </div>
            </ol>
        </div>
    </div>
)
}

export default Recipe