import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  // {
  //   path: 'recipe', 
  //   component: Recipe
  // }, 
  // {
  //   path: 'shopping',
  //   component: ShoppingListComponent 

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
