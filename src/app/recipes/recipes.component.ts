import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {

  }
}
