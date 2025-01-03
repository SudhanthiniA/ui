import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottlingplanpredeclerationComponent } from './bottlingplanpredecleration.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { BottlingplanpredeclerationRoutingModule } from './bottlingplanpredecleration-routing.module';
import { ViewbottlingplanpredeclerationComponent } from './viewbottlingplanpredecleration/viewbottlingplanpredecleration.component';
import { AddbottlingplanpredeclerationComponent } from './addbottlingplanpredecleration/addbottlingplanpredecleration.component';

@NgModule({
  declarations: [BottlingplanpredeclerationComponent,AddbottlingplanpredeclerationComponent,
    ViewbottlingplanpredeclerationComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingplanpredeclerationRoutingModule
  ]
})
export class BottlingplanpredeclerationModule { }
