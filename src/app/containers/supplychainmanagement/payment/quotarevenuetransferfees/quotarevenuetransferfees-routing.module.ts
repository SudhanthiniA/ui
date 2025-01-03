import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotarevenuetransferfeesComponent } from './quotarevenuetransferfees.component';
import { AddquotarevenuetransferfeesComponent } from './addquotarevenuetransferfees/addquotarevenuetransferfees.component';
import { EditquotarevenuetransferfeesComponent } from './editquotarevenuetransferfees/editquotarevenuetransferfees.component';
import { ViewquotarevenuetransferfeesComponent } from './viewquotarevenuetransferfees/viewquotarevenuetransferfees.component';


const routes: Routes = [
  { path: 'list', component: QuotarevenuetransferfeesComponent },
  { path: 'add', component: AddquotarevenuetransferfeesComponent },
  { path: 'edit', component: EditquotarevenuetransferfeesComponent },
   { path: 'view', component: ViewquotarevenuetransferfeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotarevenuetransferfeesRoutingModule { }
