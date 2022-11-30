import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  jsonIn = {
    name: '',
    ingredient: '',
  };

  drinks: any[] = [];
  ingredients: any[] = [];

  constructor(private apiService: ApiService, private httpClient: HttpClient) {} //richiamo qua dentro le funzioni di api.service.ts
  ingredient: string = '';
  ngOnInit(): void {
    this.getIngredientFromAPI();
  }

  getIngredientFromAPI() {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .subscribe((response: any) => {
        this.ingredients = response.drinks
          .map((index: any) => index.strIngredient1)
          .sort();
      });
  }

  handleCocktailByIngredient() {
    console.log(this.jsonIn.ingredient);
    this.apiService
      .searchCocktailByIngredient(this.jsonIn.ingredient)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
        console.log(this.drinks);
      });
  }

  handleSearchByIngredient(ingredientInput: string) {
    this.ingredient = ingredientInput;
    this.apiService
      .searchCocktailByIngredient(this.ingredient)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
        console.log(response);
      });
  }

  searchCocktailByName() {
    this.apiService
      .searchCocktailByName(this.jsonIn.name)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }
}

