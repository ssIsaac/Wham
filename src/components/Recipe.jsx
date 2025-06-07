import React from "react";
import Card from "./Card";

// function Recipe(){
//     return (
//     <div>
//         <h1>Taco Town 🌮</h1>
//         <form action="/recipe" method="POST" class="buttons">
//             <button type="submit" value="chicken" name="choice">🍗</button>
//             <button type="submit" value="beef" name="choice">🥩</button>
//             <button type="submit" value="fish" name="choice">🐟</button>
//         </form>
//         <div id="recipeContainer" class="hidden">
//             <h2 id="recipeTitle">
//                 recipe name
//             </h2>

//             <p>Marcros: </p>
//             <p>Preparation time:</p>
//             <p>Cost:</p>

//             <h3>Ingredients:</h3>
//             <ul id="ingredientsList">
//                 <li>
//                     hello
//                 </li>
//                 <li>
//                     hello
//                 </li>
//             </ul>

//             <h3>Preparation Steps:</h3>
//             <ul id="ingredientsList">
//                 <li>
//                     Ingredients list 
//                 </li>
//             </ul>
//         </div>
//     </div>
    
// )}

function Recipe() {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              image="https://cdn.tailgrids.com/assets/images/application/cards/card-01/image-01.jpg"
              CardTitle="50+ Best creative website themes & templates"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <Card
              image="https://cdn.tailgrids.com/assets/images/application/cards/card-01/image-01.jpg"
              CardTitle="Creative Card Component designs graphic elements"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <Card
              image="https://cdn.tailgrids.com/assets/images/application/cards/card-01/image-01.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe
