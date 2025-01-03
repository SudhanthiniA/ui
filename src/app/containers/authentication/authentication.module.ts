import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [],
  providers: [DatePipe],
})
export class AuthenticationModule { }
