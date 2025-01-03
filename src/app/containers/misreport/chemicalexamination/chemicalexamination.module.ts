import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ChemicalexaminationRoutingModule } from './chemicalexamination-routing.module';
// import { SamplereceivedComponent } from './samplereceived/samplereceived.component';
// import { SamplereceiptackComponent } from './samplereceiptack/samplereceiptack.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ChemicalexaminationRoutingModule
  ]
})
export class ChemicalexaminationModule { }
