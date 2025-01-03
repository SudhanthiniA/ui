import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ProfilebondwarehouseRoutingModule } from './profilebondwarehouse-routing.module';
import { ProfilebondwarehouseComponent } from './profilebondwarehouse.component';


@NgModule({
  declarations: [ProfilebondwarehouseComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfilebondwarehouseRoutingModule
  ]
})
export class ProfilebondwarehouseModule { }
