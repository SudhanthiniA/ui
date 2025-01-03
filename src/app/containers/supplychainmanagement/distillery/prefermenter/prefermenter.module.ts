import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { PrefermenterComponent } from './prefermenter.component';
import { AddprefermenterComponent } from './addprefermenter/addprefermenter.component';
import { ViewprefermenterComponent } from './viewprefermenter/viewprefermenter.component';
import { PrefermenterRoutingModule } from './prefermenter-routing.module';

@NgModule({
  declarations: [PrefermenterComponent, AddprefermenterComponent, ViewprefermenterComponent],
  imports: [
    CommonModule,
    SharedModule, 
    PrefermenterRoutingModule
  ]
})
export class PrefermenterModule { }
