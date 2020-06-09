import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
  
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Just a test Recipe', '../../../assets/images/cropped-GettyImages-643764514.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe('Another test Recipe', 'Just a test Recipe', '../../../assets/images/cropped-GettyImages-643764514.jpg',
    [
      new Ingredient('Buns',2),
      new Ingredient('Meat',1)
    ])
  ];
  getRecipe(){
    return this.recipes.slice();
  }
}