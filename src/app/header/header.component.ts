import { RecipeApiService } from './../recipes/recipe-api.service';
import { Component } from "@angular/core";

@Component({
    selector:'header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    collapsed: boolean = true;

    constructor(private recipeApiService: RecipeApiService ) {}

    onSave() {
        this.recipeApiService.storeRecipe();
    }

    onFetch() {
        this.recipeApiService.fetchRecipe().subscribe();
    }
}