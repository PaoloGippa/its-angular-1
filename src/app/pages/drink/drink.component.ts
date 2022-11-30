import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  //dichiarazione variabile nel Componente che verrà poi esportata ed usata//
  drink: any = {
    ingredients: [],
    instructions: [],
  };

  lang: string = ''; //dichiarazione variabili da usare come params//

  currentInstruction: string = '';

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private ApiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;
    this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .subscribe((response: any) => {
        this.drink = response.drinks[0];
        this.drink.ingredients = [];
        this.drink.instructions = [];
        Object.keys(this.drink).forEach((key) => {
          //il metodo .keys() ritorna le proprietà dell'oggetto//
          if (key.startsWith('strIngredient') && this.drink[key]) {
            const index = key.replace('strIngredient', '');
            console.log(index);
            this.drink.ingredients.push({
              name: this.drink[key],
              measure: this.drink['strMeasure' + index],
            });
          }
          if (key.startsWith('strInstructions') && this.drink[key]) {
            let lang = key.replace('strInstructions', '');
            if (!lang) {
              lang = 'EN';
            }
            console.log(lang);
            this.drink.instructions[lang] = this.drink[key];
          }
        });
        console.log(this.drink);
      });
  }

  /*ngOnInit() {
  this.activatedRoute.data.subscribe(({ hero }) => {
    // do something with your resolved data ...
  })
}
}*/

  changeLanguage() {
    if (this.lang === 'ES') {
      this.currentInstruction = this.drink.strInstructionsES;
    } else if (this.lang === 'IT') {
      this.currentInstruction = this.drink.strInstructionsIT;
    } else if (this.lang === 'DE') {
      this.currentInstruction = this.drink.strInstructionsDE;
    } else if (this.lang === 'FR') {
      this.currentInstruction = this.drink.strInstructionsFR;
    } else if (this.lang === 'EN') {
      this.currentInstruction = this.drink.strInstructions;
    } else if (this.lang === undefined) {
      this.currentInstruction = this.drink.strInstructions;
    }
  }
}
