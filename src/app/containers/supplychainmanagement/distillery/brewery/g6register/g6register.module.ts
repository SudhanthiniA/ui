import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { G6registerRoutingModule } from './g6register-routing.module';
import { G6registerComponent } from './g6register.component';
import { Addg6registerComponent } from './addg6register/addg6register.component';
import { Viewg6registerComponent } from './viewg6register/viewg6register.component';



@NgModule({
  declarations: [G6registerComponent, Addg6registerComponent,Viewg6registerComponent],
  imports: [
    CommonModule,
    SharedModule,
    G6registerRoutingModule
  ]
})
export class G6registerModule { }
