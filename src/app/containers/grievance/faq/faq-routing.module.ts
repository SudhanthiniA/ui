import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq.component';
import { AddfaqComponent } from './addfaq/addfaq.component';
import { ViewfaqComponent } from './viewfaq/viewfaq.component';

const routes: Routes = [
  { path: 'list', component: FaqComponent },
  { path: 'add', component: AddfaqComponent },
  { path: 'view', component: ViewfaqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
