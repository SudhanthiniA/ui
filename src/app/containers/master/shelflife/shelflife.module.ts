import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelflifeComponent } from './shelflife.component';
import { AddshelflifeComponent } from './addshelflife/addshelflife.component';
import { ViewshelflifeComponent } from './viewshelflife/viewshelflife.component';
import { ShelflifeRoutingModule } from './shelflife-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [ShelflifeComponent, AddshelflifeComponent, ViewshelflifeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShelflifeRoutingModule
  ]
})
export class ShelflifeModule { }
