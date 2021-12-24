import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "./models/recipe.model";
import { RecipeService } from './recipe.service';
import { map, tap } from 'rxjs/operators'
@Injectable({
    providedIn:'root'
})
export class RecipeApiService {
    baseURL = 'https://angular-recipe-11a1f-default-rtdb.firebaseio.com/';
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
        ) {}

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(`${this.baseURL}recipes.json`, recipes).subscribe();
    }

    fetchRecipe() {
        return this.http.get(`${this.baseURL}recipes.json`).pipe(map((recipes: Recipe[]) => {
            return recipes.map((recipe) => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            })
        }), 
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        }));
    }
}
