import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { TestComponent } from './test/test.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: '' , 
    redirectTo: '/recipe', 
    pathMatch: 'full'
  }, 
  {
    path: 'recipe', 
    component: RecipesComponent , 
    children: [
      {
        path: '', 
        component: RecipesStartComponent
      }, 
      {
        path: 'new', 
        component: RecipeEditComponent

      }, 
      {
        path: ':id', 
        component: RecipesDetailComponent

      }, 
      {
        path: ':id/edit', 
        component: RecipeEditComponent
      }
    ]
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
