import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputeRef: ElementRef;
  @ViewChild('amountInput') amountInputeRef: ElementRef;
  

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputeRef.nativeElement.value;
    const ingAmount = this.amountInputeRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
   this.slService.addIngredients(newIngredient);
  }
}
