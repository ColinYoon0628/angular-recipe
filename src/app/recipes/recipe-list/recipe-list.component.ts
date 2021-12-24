import { RecipeApiService } from './../recipe-api.service';
import { Subscription } from 'rxjs';
import { Recipe } from './../models/recipe.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(
    private recipeService: RecipeService,
    private recipeApiService: RecipeApiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.recipeApiService.fetchRecipe().subscribe();
    this.subscription = this.recipeService.recipesChanged.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  NewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
