import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { MwlostandmissingRoutingModule } from './mwlostandmissing-routing.module';
import { MwlostandmissingComponent } from './mwlostandmissing.component';
import { ViewmwlostandmissingComponent } from './viewmwlostandmissing/viewmwlostandmissing.component';

@NgModule({
  declarations: [MwlostandmissingComponent, ViewmwlostandmissingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwlostandmissingRoutingModule
  ]
})
export class MwlostandmissingModule { }
