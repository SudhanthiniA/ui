import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MasterComponent } from './master.component';
import { MasterRoutingModule } from './master-routing.module';

// import { AddconfigurationComponent } from './addconfiguration/addconfiguration.component'
// import { ViewconfigurationComponent } from './viewconfiguration/viewconfiguration.component';

@NgModule({
  declarations: [MasterComponent,  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
