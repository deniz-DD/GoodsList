import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  selectedTest: Recipe;
  

}
