import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';

@Component({
  selector: 'app-viewreceivedimportpermits',
  templateUrl: './viewreceivedimportpermits.component.html',
  styleUrls: ['./viewreceivedimportpermits.component.scss']
})
export class ViewreceivedimportpermitsComponent implements OnInit {
  importPermitStatusObj: any;
  importDetails: any = [];
  status: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private importpasspermit: importpasspermitService,
    private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.getImportPermitById(param.id);
        this.status = param.status;
      }
    });
  }
  getImportPermitById(id) {
    this.importpasspermit.getimportstatubyid(id).subscribe((responceData: any) => {
      if (responceData.status == 's') {
        this.importPermitStatusObj = responceData.data;
        this.importDetails = responceData.data.importPermitIndentDetails.importPermitProdDetails;
      }
    });
  }

  updateaccept(status) {

    let postingobj = {
      approvalStatus: status,
      // "createdBy": 0,
      // "createdDate": "2021-05-25T04:09:44.572Z",
      // entityId: 6,
      // "id": 0,
      indentDate: this.importPermitStatusObj.indentDate,
      indentNo: this.importPermitStatusObj.indentNo,
      // "modifiedBy": 0,
      // "modifiedDate": "2021-05-25T04:09:44.572Z",
      // "totBottlesRequested": 0,
      // "totCasesRequested": 0,
      // "unitName": "string"
    }
    this.importpasspermit.updatestatus(postingobj)
      .subscribe((resp: any)=> {
         if(resp.status == 's') {
          this.alert.showSuccess('Record' + " " + status + " " + 'Succesully', 'Success')
          this.router.navigate(['supplychainmanagement/warehouse/receivedimportpermits/list']);
         }
      })

  }

}
