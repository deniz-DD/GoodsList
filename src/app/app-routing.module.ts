import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'recipe', 
    component: RecipesComponent
  }, 
  {
    path: 'shopping',
    component: ShoppingListComponent

  }, 
  {
    path: 'test' , 
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
