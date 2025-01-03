import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl10aRoutingModule } from './cl10a-routing.module';
import { Viewcl10aComponent } from './viewcl10a/viewcl10a.component';
import { Cl10aComponent } from './cl10a.component';


@NgModule({
  declarations: [Viewcl10aComponent, Cl10aComponent],
  imports: [
    CommonModule,
    SharedModule,
    Cl10aRoutingModule
  ]
})
export class Cl10aModule { }
