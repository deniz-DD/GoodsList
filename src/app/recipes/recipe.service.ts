import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";


@Injectable()
export class RecipeService {
  recipeSe = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('Moin' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg' , [new Ingredient('Fleisch' , 1), new Ingredient('Pommes' , 12) ]), 
        new Recipe('Peter' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg' , [new Ingredient('Fleisch' , 1), new Ingredient('Pommes' , 12)]), 
        new Recipe('Ranke' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg' , [new Ingredient('Fleisch' , 1), new Ingredient('Pommes' , 12)]), 
        new Recipe('Ranke' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg' , [new Ingredient('Fleisch' , 1), new Ingredient('Pommes' , 12)])
   ];

   constructor(private shoppingService: ShoppingListService){}

   getRecipes(){
     return this.recipes.slice();
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);

   }


}