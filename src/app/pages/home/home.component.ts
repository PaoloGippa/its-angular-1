import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: any[] = [];
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  firstLetter = '';
  randomCocktail: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.changeFirstLetter('A');
    this.getRandomCocktail();
  }

  changeFirstLetter(letter: string) {
    this.firstLetter = letter;
    this.apiService
      .searchCocktailByFirstLetter(this.firstLetter)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }

  getRandomCocktail() {
    this.apiService.getRandomCocktail().subscribe((response: any) => {
      this.randomCocktail = response.drinks[0];
    });
  }
}
