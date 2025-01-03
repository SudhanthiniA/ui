import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IndentbrickindustriesRoutingModule } from './indentbrickindustries-routing.module';
import { IndentbrickindustriesComponent } from './indentbrickindustries.component';
import { AddindentbrickindustriesComponent } from './addindentbrickindustries/addindentbrickindustries.component';

@NgModule({
  declarations: [IndentbrickindustriesComponent, AddindentbrickindustriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentbrickindustriesRoutingModule
  ]
})
export class IndentbrickindustriesModule { }
