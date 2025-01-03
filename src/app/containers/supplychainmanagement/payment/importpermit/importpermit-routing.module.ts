import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportpermitComponent } from './importpermit.component';
import { AddimportpermitComponent } from './addimportpermit/addimportpermit.component';
import { EditimportpermitComponent } from './editimportpermit/editimportpermit.component';
import { ViewimportpermitComponent } from './viewimportpermit/viewimportpermit.component';


const routes: Routes = [
  { path: 'list', component: ImportpermitComponent },
  { path: 'add', component: AddimportpermitComponent },
  { path: 'edit', component: EditimportpermitComponent },
   { path: 'view', component: ViewimportpermitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitRoutingModule { }
