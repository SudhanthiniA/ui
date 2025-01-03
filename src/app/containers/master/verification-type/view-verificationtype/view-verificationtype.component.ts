import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerificationTypeService } from '@app/services';

@Component({
  selector: 'app-view-verificationtype',
  templateUrl: './view-verificationtype.component.html',
  styleUrls: ['./view-verificationtype.component.scss']
})
export class ViewVerificationtypeComponent implements OnInit {

  verificationObject: any = {};
  addedit = 'Add';

  constructor(
    private route: ActivatedRoute,
    private verificationService: VerificationTypeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getVerificationById(params.Id);
        this.verificationObject.Id = params.Id;
        this.addedit = 'View';
      }
    });
  }

  getVerificationById(id) {
    this.verificationService.getVerificationTypeById(id).subscribe((resp: any) => {
      this.verificationObject = resp.data;
      console.log(this.verificationObject);
      if (resp.data.isActive) {
        this.verificationObject.isActive = 'Active';

      } else {
        this.verificationObject.isActive = 'InActive';
      }
    });
  }
}
