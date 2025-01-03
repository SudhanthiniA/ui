import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Dispatch0IdRoutingModule } from './dispatch0-id-routing.module';
import { DispatchIdComponent } from './dispatch-id.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [DispatchIdComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    Dispatch0IdRoutingModule
  ]
})
export class DispatchIdModule { }
