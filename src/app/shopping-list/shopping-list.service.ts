import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from 'rxjs';
import { Ingredient } from './../shared/models/ingredient.model';

@Injectable({
    providedIn:'root'
})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    editingSubject = new Subject<number>();
    private ingredients: Ingredient[] = [];

    getIngredients(): Ingredient[] {
        return this.ingredients;
    }

    getEditingIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    addIngredient(newIngredient: Ingredient): void {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients);
    }

    addIngredientsFromRecipe(ingredients:Ingredient[]): void {
        ingredients.map((item) => {
            this.ingredients.push(item);
        })
    }

    updateIngredient(index: number, newIngredient: Ingredient): void {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients);
    }

    deleteIngredient(index: number): void {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients);
    }
}
