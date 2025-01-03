import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddedpcategoryComponent } from './addedpcategory/addedpcategory.component';
import { ViewedpcategoryComponent } from './viewedpcategory/viewedpcategory.component';
import { EdpcategoryComponent } from './edpcategory.component';
import { EdpcategoryRoutingModule } from './edpcategory-routing.module';


@NgModule({
  declarations: [EdpcategoryComponent,AddedpcategoryComponent, ViewedpcategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    EdpcategoryRoutingModule
  ]
})
export class EdpcategoryModule { }
