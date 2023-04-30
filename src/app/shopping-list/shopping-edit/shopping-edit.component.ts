import { Component, ElementRef, EventEmitter, ViewChild , Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput' , {static: false})  nameInputRef: ElementRef; 
  @ViewChild('amountInput' , {static: false})  amountInputRef: ElementRef; 

  constructor(private shoppingService: ShoppingListService){}
  


  onAddItem(){
    const inName = this.nameInputRef.nativeElement.value;
    const inAmount = this.amountInputRef.nativeElement.value;
    const newIngredient  = new Ingredient(inName, inAmount);
    this.shoppingService.IngredientAdded(newIngredient);
    
    


  }

}
