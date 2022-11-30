import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  searchCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${firstLetter}`
    );
  }

  searchCocktailByName(searchString: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchString}`
    );
  }

  searchCocktailByIngredient(ingredient: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
  }

  searchIngredientByName(searchString: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=${searchString}`
    );
  }

  getRandomCocktail() {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
  }

  lookupDrinkById(id: string) {
    return this.httpClient.get(
      `https://https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + id
    );
  } //funzione scritta dal pasella e da settare negli altri file */
}
