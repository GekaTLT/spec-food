import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RecipesComponent} from './recipes/recipes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vegan', component: HomeComponent},
  {path: 'vegan/:id', component: RecipesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
