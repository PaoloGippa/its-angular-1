import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-drink', //lista drink fatta in un'ottica Componente, mettere l'import e settare la rotta//
  templateUrl: './list-item-drink.component.html',
})
export class ListItemDrinkComponent {
  @Input() drink: any;
}
