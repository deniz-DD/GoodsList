import { Component , Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  id: number;
  
  constructor(private recipeService:RecipeService , private route: ActivatedRoute , private router : Router){}


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
    
  }

  onEditRecipe(){
    this.router.navigate(['edit'] ,{relativeTo: this.route} );

  }

  onPushIngredient(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
