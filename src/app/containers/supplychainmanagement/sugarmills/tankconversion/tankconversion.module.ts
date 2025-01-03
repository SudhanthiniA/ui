import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TankconversionRoutingModule } from './tankconversion-routing.module';
import { TankconversionComponent } from './tankconversion.component';
import { AddedittankconversionComponent } from './addedittankconversion/addedittankconversion.component';
import { ViewtankconversionComponent } from './viewtankconversion/viewtankconversion.component';

@NgModule({
  declarations: [
    TankconversionComponent,
    AddedittankconversionComponent,
    ViewtankconversionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TankconversionRoutingModule,
    NgbModule
  ]
})
export class TankconversionModule { }
