import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';


import { AlcoholtechnologyatlabRoutingModule } from './alcoholtechnologyatlab-routing.module';
import { AlcoholtechnologyatlabComponent } from './alcoholtechnologyatlab.component';
import { AddalcoholtechnologyatlabComponent } from './addalcoholtechnologyatlab/addalcoholtechnologyatlab.component';
import { ViewalcoholtechnologyatlabComponent } from './viewalcoholtechnologyatlab/viewalcoholtechnologyatlab.component';

@NgModule({
  declarations: [AlcoholtechnologyatlabComponent, AddalcoholtechnologyatlabComponent, ViewalcoholtechnologyatlabComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlcoholtechnologyatlabRoutingModule
  ]
})
export class AlcoholtechnologyatlabModule { }
