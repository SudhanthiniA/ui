import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatreportComponent } from './chatreport.component';


const routes: Routes = [
  { path: '', component: ChatreportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatreportRoutingModule { }
