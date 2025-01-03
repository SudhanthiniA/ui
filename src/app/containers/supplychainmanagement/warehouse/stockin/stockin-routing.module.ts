import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StockinComponent } from './stockin.component';
import { AddstockinComponent } from './addstockin/addstockin.component';
import { ViewstockinComponent } from './viewstockin/viewstockin.component';
import { PreviewstockinComponent } from './previewstockin/previewstockin.component';

const routes: Routes = [
  { 
    path: 'list', component: StockinComponent 
  },
  { 
    path: 'add', component: AddstockinComponent 
  },
  { 
    path: 'edit/:id', component: AddstockinComponent 
  },
  { 
    path: 'view/:id', component: ViewstockinComponent 
  },
  { 
    path: 'preview', component: PreviewstockinComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinRoutingModule { }
