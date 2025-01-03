import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Formfl25BRoutingModule } from './formfl25-b-routing.module';
import { Formfl25BComponent } from './formfl25-b.component';
import { Addpart25BComponent } from './addpart25-b/addpart25-b.component';
import { Viewpart25BComponent } from './viewpart25-b/viewpart25-b.component';


@NgModule({
  declarations: [Formfl25BComponent, Addpart25BComponent, Viewpart25BComponent],
  imports: [
    CommonModule,
    SharedModule,
    Formfl25BRoutingModule
  ]
})
export class Formfl25BModule { }
