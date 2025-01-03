import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupllytypeRoutingModule } from './supllytype-routing.module';
import { SupllytypeComponent } from './supllytype.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditsupplytypeComponent } from './addeditsupplytype/addeditsupplytype.component';
import { ViewsupplytypeComponent } from './viewsupplytype/viewsupplytype.component';

@NgModule({
  declarations: [
    SupllytypeComponent, 
    AddeditsupplytypeComponent, 
    ViewsupplytypeComponent
  ],
  imports: [
    CommonModule,
    SupllytypeRoutingModule,
    SharedModule
  ]
})
export class SupllytypeModule { }
