import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;
  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    })
  }

  sendToList(): void {
    this.shoppingListService.addIngredientsFromRecipe(this.selectedRecipe.ingredients);
  }

  editRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate([''], {relativeTo: this.route});
  }
}
