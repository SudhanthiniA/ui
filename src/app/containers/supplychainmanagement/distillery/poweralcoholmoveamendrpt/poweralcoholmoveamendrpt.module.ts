import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { PoweralcoholmoveamendrptRoutingModule } from './poweralcoholmoveamendrpt-routing.module';
import { PoweralcoholmoveamendrptComponent } from './poweralcoholmoveamendrpt.component';
import { AddpoweralcoholmoveamendrptComponent } from './addpoweralcoholmoveamendrpt/addpoweralcoholmoveamendrpt.component';
import { ViewpoweralcoholmoveamendrptComponent } from './viewpoweralcoholmoveamendrpt/viewpoweralcoholmoveamendrpt.component';

@NgModule({
  declarations: [PoweralcoholmoveamendrptComponent, AddpoweralcoholmoveamendrptComponent, ViewpoweralcoholmoveamendrptComponent],
  imports: [
    CommonModule,
    SharedModule,
    PoweralcoholmoveamendrptRoutingModule
  ]
})
export class PoweralcoholmoveamendrptModule { }
