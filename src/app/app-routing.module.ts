import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  //{ path: "", component: AppComponent, pathMatch: "full" },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "trivia", component: TriviaComponent, pathMatch: "full" },
  { path: "resumen", component: ResumenComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
