import { RecipeService } from './recipe.service';
import { RecipeApiService } from './recipe-api.service';
import { Recipe } from './models/recipe.model';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
@Injectable({
    providedIn:'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor(private recipeApiService: RecipeApiService, private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();

        if(recipes.length === 0) {
            return this.recipeApiService.fetchRecipe();
        } else {
            return recipes;
        }
    }
}