import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SacramentalwinepermitComponent } from './sacramentalwinepermit.component';
import { SacramentalwinepermitRoutingModule } from './sacramentalwinepermit-routing.module';
import { AddsacramentalwinepermitComponent } from './addsacramentalwinepermit/addsacramentalwinepermit.component';
import { ViewsacramentalwinepermitComponent } from './viewsacramentalwinepermit/viewsacramentalwinepermit.component';



@NgModule({
  declarations: [SacramentalwinepermitComponent,AddsacramentalwinepermitComponent,ViewsacramentalwinepermitComponent],
  imports: [
    CommonModule,
    SharedModule,
    SacramentalwinepermitRoutingModule,
  ]
})
export class SacramentalwinepermitModule { }
