import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from 'rxjs';
import { Ingredient } from './../shared/models/ingredient.model';

@Injectable({
    providedIn:'root'
})
export class ShoppingListService implements OnDestroy {
    ingredientsChanged = new Subject<Ingredient[]>();
    editingSubject = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 2)
      ];

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

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}