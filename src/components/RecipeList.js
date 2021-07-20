import React from "react";

import Recipe from './Recipe';
import recipes from "../Recipes";

import { RecipeListWrapper } from "./Style";

function RecipeList() {
  return (
    <>
      <RecipeListWrapper>
        <ul>
          {recipes.map((item) => {
            return <li>
              <Recipe title={item.recipe} description={item.description} id={item.id} ingredients={item.ingredients} extra={item.extras} price={item.price} text={item.text} image={item.image} />
            </li>;
          })}
        </ul>
      </RecipeListWrapper>
    </>
  );
}

export default RecipeList;
