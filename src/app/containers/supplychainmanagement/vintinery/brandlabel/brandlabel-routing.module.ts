import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandlabelComponent } from './brandlabel.component';
import { AddbrandlabelComponent } from './addbrandlabel/addbrandlabel.component';
import { ViewbrandlabelComponent } from './viewbrandlabel/viewbrandlabel.component';

const routes: Routes = [
  { path: 'list', component: BrandlabelComponent},
  {path: 'add', component: AddbrandlabelComponent},
  {path: 'view', component: ViewbrandlabelComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlabelRoutingModule { }
