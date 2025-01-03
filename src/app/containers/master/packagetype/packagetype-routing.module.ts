import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagetypeComponent } from './packagetype.component';
import { AddeditpackagetypeComponent } from './addeditpackagetype/addeditpackagetype.component';
import { ViewpackagetypeComponent } from './viewpackagetype/viewpackagetype.component';


const routes: Routes = [

  { path: 'list', component: PackagetypeComponent },
  { path: 'add', component: AddeditpackagetypeComponent },
  { path: 'edit/:id', component: AddeditpackagetypeComponent },
  { path: 'view', component: ViewpackagetypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagetypeRoutingModule { }
