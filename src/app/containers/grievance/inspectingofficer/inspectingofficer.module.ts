import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { InspectingofficerComponent } from './inspectingofficer.component';
import { InspectingofficerRoutingModule } from './inspectingofficer-routing.module';
import { AddinspectingofficerComponent } from './addinspectingofficer/addinspectingofficer.component';
import { ViewinspectingofficerComponent } from './viewinspectingofficer/viewinspectingofficer.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { NewpendingComponent } from './newpending/newpending.component';


@NgModule({
  declarations:  [AddinspectingofficerComponent, ViewinspectingofficerComponent, InspectingofficerComponent, ResolvedComponent, NewpendingComponent],
  imports: [
    CommonModule,
    SharedModule,
    InspectingofficerRoutingModule
  ]
})
export class InspectingofficerModule { }
