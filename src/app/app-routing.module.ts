
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicepsComponent } from './modules/exercice-physique/biceps/biceps.component';
import {AppComponent } from './app.component'

const routes: Routes = [{
  path:'',
  loadChildren: () => import('./modules/exercice-physique/exercice-physique-routing.module').then((m) => m.ExercicePhysiqueRoutingModule)

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }