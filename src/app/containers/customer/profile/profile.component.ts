import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AuthService,
  AlertService,
  DocumentUploadService,
} from '@app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileDet: any;
  profileAddrDet: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertSer: AlertService,
    private authSer: AuthService,
  ) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const userId = this.authSer.getUserId();
    this.authSer.getUserById(userId).subscribe(
      (resp: any) => {
        console.log('resp::', resp);
        if (resp.responseCode === 200){
          this.profileDet = resp.content;
          this.profileAddrDet = this.profileDet.userAddress;
          this.alertSer.showSuccess(resp.responseMessage, 'Success');
        } else {
          this.alertSer.showError(resp.responseMessage, 'Error');
        }
      }
    );
  }

  editProfile() {
    this.router.navigate(['/customer/edit-profile']);
  }

}
