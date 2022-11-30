import { Drink } from '../_models/drink.model';
import { ApiService } from '../_service/api.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LookupdrinkByIdResolver implements Resolve<Drink> {
  constructor(private service: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Drink> {
    return this.service.lookupDrinkById(route.paramMap.get('idDrink')!);
  }
}
