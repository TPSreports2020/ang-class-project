import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is only a test', "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Recipe('A test recipe', 'This is only a test', "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
    ];

    recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

}