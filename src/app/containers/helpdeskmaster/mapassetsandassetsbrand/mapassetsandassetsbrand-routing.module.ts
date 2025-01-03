import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapassetsandassetsbrandComponent } from './/mapassetsandassetsbrand.component';
import { AddmapassetsandassetsbrandComponent } from './addmapassetsandassetsbrand/addmapassetsandassetsbrand.component';
import { ViewmapassetsandassetsbrandComponent } from './viewmapassetsandassetsbrand/viewmapassetsandassetsbrand.component';

const routes: Routes = [
  { path: 'list', component: MapassetsandassetsbrandComponent },
  { path: 'add', component: AddmapassetsandassetsbrandComponent },
  { path: 'view', component: ViewmapassetsandassetsbrandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapassetsandassetsbrandRoutingModule { }
