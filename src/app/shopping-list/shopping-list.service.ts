import { Ingredient } from './../shared/models/ingredient.model';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 2)
      ];

    getIngredients() {
        return this.ingredients;
    }
    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    addIngredientsFromRecipe(ingredients:Ingredient[]) {
        ingredients.map((item) => {
            this.ingredients.push(item);
        })
    }
}