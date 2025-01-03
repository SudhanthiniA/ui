import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ParentunitRoutingModule } from './parentunit-routing.module';
import { ParentunitComponent } from './parentunit.component';
import { ViewparentunitComponent } from './viewparentunit/viewparentunit.component';



@NgModule({
  declarations: [ParentunitComponent, ViewparentunitComponent,],
  imports: [
    CommonModule,
    SharedModule,
    ParentunitRoutingModule
  ]
})
export class ParentunitModule { }
