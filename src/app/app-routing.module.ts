import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientListComponent } from './pages/ingredient-list/ingredient-list.component';
import { OrdiniComponent } from './pages/ordini/ordini.component';
import { LookupdrinkByIdResolver } from './_resolvers/lookupdrink-by-id.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: 'ordini', component: OrdiniComponent },
  { path: 'ingredient/:ingredient', component: IngredientListComponent },
  {
    path: 'drink/:idDRink',
    component: DrinkComponent,
    resolve: {
      drink: LookupdrinkByIdResolver,
      pippo: LookupdrinkByIdResolver,
    },
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
