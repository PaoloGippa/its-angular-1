import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/_service/api.service';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.scss'],
})
export class OrdiniComponent implements OnInit {
  constructor(private apiService: ApiService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log(this.jsonIn.words);
  }

  jsonIn = {
    words: '',
  };

  drinks: any[] = [];
  orderedDrinks: string[] = [];

  handleCocktailSubmit() {
    this.apiService
      .searchCocktailByName(this.jsonIn.words)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
        console.log(response.drinks);
        this.drinks.forEach((drink) => this.handleOrderedDrink(drink));
      });
  }

  select(drink: any) {
    if (this.orderedDrinks.length <= 4) {
      drink.selected = true;
      this.orderedDrinks.push(drink.idDrink);
      console.log(this.orderedDrinks);
    } else {
      alert('Puoi selezionare solo 5 drinks!');
    }
  }

  deselect(drink: any) {
    drink.selected = false;
    for (let i = 0; i < this.orderedDrinks.length; i++) {
      if (drink.idDrink === this.orderedDrinks[i]) {
        this.orderedDrinks.splice(i, 1);
      }
    }
    console.log(this.orderedDrinks);
  }

  handleSelection(drink: any) {
    if (drink.selected === true) {
      this.deselect(drink);
    } else {
      this.select(drink);
    }
  }

  handleOrderedDrink(drink: any) {
    for (let i = 0; i < this.orderedDrinks.length; i++) {
      if (drink.idDrink === this.orderedDrinks[i]) {
        drink.selected = true;
      }
    }
  }
}
