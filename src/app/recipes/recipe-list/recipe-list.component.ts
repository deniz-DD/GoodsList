import { Component , EventEmitter , Output , OnInit } from '@angular/core';
import{Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent  implements OnInit{

  

  constructor( private recipeService: RecipeService , private route: ActivatedRoute , private router: Router){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


  recipes: Recipe[] = [];

  onNewRecipe()
   {
    this.router.navigate(['new'] , {relativeTo: this.route});

   }




  OnDestroyFirst(){
    this.recipes.splice(0 , 1);
    console.log(this.recipes.length);
    
  }

 

}
