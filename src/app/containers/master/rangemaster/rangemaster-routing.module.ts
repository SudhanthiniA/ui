import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrangemasterComponent } from './addrangemaster/addrangemaster.component';
import { ViewrangemasterComponent } from './viewrangemaster/viewrangemaster.component';
import { RangemasterComponent } from './rangemaster.component';


const routes: Routes = [
  {
    path: 'list',
    component: RangemasterComponent
  },
  {
    path: 'add',
    component: AddrangemasterComponent
  },
  {
    path : 'view',
    component: ViewrangemasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangemasterRoutingModule { }
