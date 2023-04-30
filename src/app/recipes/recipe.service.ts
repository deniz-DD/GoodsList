import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";



export class RecipeService {
  recipeSe = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('Moin' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg'), 
        new Recipe('Peter' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg'), 
        new Recipe('Ranke' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg'), 
        new Recipe('Ranke' , 'testtest' , 'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685_960_720.jpg')
   ];

   getRecipes(){
     return this.recipes.slice();
   }


}