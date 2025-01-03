import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AlcoholtechnologyatlabComponent } from './alcoholtechnologyatlab.component';
import { AddalcoholtechnologyatlabComponent } from './addalcoholtechnologyatlab/addalcoholtechnologyatlab.component';
import { ViewalcoholtechnologyatlabComponent } from './viewalcoholtechnologyatlab/viewalcoholtechnologyatlab.component';


const routes: Routes = [{ path:'list', component: AlcoholtechnologyatlabComponent },
                        { path:'add', component: AddalcoholtechnologyatlabComponent},
                        { path:'view', component: ViewalcoholtechnologyatlabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlcoholtechnologyatlabRoutingModule { }
