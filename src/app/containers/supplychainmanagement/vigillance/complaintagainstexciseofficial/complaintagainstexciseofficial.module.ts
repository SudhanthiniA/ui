import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ComplaintagainstexciseofficialRoutingModule } from './complaintagainstexciseofficial-routing.module';
import { ComplaintagainstexciseofficialComponent } from './complaintagainstexciseofficial.component';
import { AddcomplaintagainstexciseofficialComponent } from './addcomplaintagainstexciseofficial/addcomplaintagainstexciseofficial.component';
import { ViewcomplaintagainstexciseofficialComponent } from './viewcomplaintagainstexciseofficial/viewcomplaintagainstexciseofficial.component';

@NgModule({
  declarations: [ComplaintagainstexciseofficialComponent, AddcomplaintagainstexciseofficialComponent, ViewcomplaintagainstexciseofficialComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComplaintagainstexciseofficialRoutingModule
  ]
})
export class ComplaintagainstexciseofficialModule { }
