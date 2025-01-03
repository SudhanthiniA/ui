import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BottlingprocessRoutingModule } from './bottlingprocess-routing.module';
import { BottlingprocessComponent } from './bottlingprocess.component';
import { AddbottlingprocessComponent } from './addbottlingprocess/addbottlingprocess.component';
import { ViewbottlingprocessComponent } from './viewbottlingprocess/viewbottlingprocess.component';


@NgModule({
  declarations: [BottlingprocessComponent, AddbottlingprocessComponent, ViewbottlingprocessComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingprocessRoutingModule
  ]
})
export class BottlingprocessModule { }
