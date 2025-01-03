import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'applicantreg',
    loadChildren: () => import('./applicantregistration/applicantregistration.module').then(m => m.ApplicantregistrationModule)
  },
  {
    path: 'applicantprofile',
    loadChildren: () => import('./applicantprofile/applicantprofile.module').then(m => m.ApplicantprofileModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegistrationRoutingModule { }
