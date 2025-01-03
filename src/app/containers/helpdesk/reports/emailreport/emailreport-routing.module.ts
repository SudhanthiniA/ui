import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailreportComponent } from './emailreport.component';



const routes: Routes = [
  { path: '', component: EmailreportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailreportRoutingModule { }
