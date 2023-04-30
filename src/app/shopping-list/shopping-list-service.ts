import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientChange = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient ('Apple' , 5), 
        new Ingredient ('Coconut' , 1212), 
    
        
    ];
    IngredientAdded(ingre: Ingredient){
        this.ingredients.push(ingre);
        this.ingredientChange.emit(this.ingredients.slice());
    
    
    }

    getIngredient(){
        return this.ingredients.slice();
    }
    addIngredients(ingredients: Ingredient[]){
        // for(let ingre of ingredients){
        //     this.addIngredients(ingre);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientChange.emit(this.ingredients.slice());

    }
    
}