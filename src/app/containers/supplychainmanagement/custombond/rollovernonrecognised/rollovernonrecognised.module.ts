import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RollovernonrecognisedRoutingModule } from './rollovernonrecognised-routing.module';
import { RollovernonrecognisedComponent } from './rollovernonrecognised.component';
import { AddrollovernonrecognisedComponent } from './addrollovernonrecognised/addrollovernonrecognised.component';

@NgModule({
  declarations: [RollovernonrecognisedComponent,AddrollovernonrecognisedComponent],
  imports: [
    CommonModule,
    SharedModule,
    RollovernonrecognisedRoutingModule
  ]
})
export class RollovernonrecognisedModule { }
