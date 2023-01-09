import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { BooksComponent } from './books/books.component';
import { AutoresComponent } from './autores/autores.component';
import { PoemasComponent } from './poemas/poemas.component';

const routes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "autores/:title", component: AutoresComponent },
  { path: "poemas", component: PoemasComponent },
  { path: "home", component: HomeComponent },

  { path: "**", redirectTo: "home" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
