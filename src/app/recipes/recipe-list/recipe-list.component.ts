import { Component , EventEmitter , Output , OnInit } from '@angular/core';
import{Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent  implements OnInit{

  

  constructor( private recipeService: RecipeService , private route: ActivatedRoute){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


  recipes: Recipe[] = [];





  OnDestroyFirst(){
    this.recipes.splice(0 , 1);
    console.log(this.recipes.length);
    
  }

 

}
