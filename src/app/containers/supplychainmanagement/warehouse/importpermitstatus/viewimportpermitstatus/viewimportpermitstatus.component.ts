import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-viewimportpermitstatus',
  templateUrl: './viewimportpermitstatus.component.html',
  styleUrls: ['./viewimportpermitstatus.component.scss']
})
export class ViewimportpermitstatusComponent implements OnInit {

  editId: any;
  obj: any;
  status:any;
  tableobj:any;
  importPermitStatusObj:any;
  constructor(
    private route: ActivatedRoute , 
    private router:Router,
    private importpasspermit: importpasspermitService,
    private alert: AlertService,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.editId = params.id;
        this.status = params.status
        console.log(this.status,"status")
      }
    });
    // this.route.params.subscribe(params => {
    //   if (params.Id) {
    //     this.editId = params.Id;
    //     this.setData(this.editId);
    //   }
    // });
  }

  getById(id) {
    this.importpasspermit.getimportstatubyid(id).subscribe((responceData: any) => {
      if (responceData.status == 's') {
        this.importPermitStatusObj = responceData.data
      }
    })
  }
  // setData(id) {
  //   this.importpasspermit.getImportsbyId(id).subscribe((responceData: any) => {
  //     this.obj = responceData.data;
  //     console.log(this.obj);
      
  //     this.tableobj = this.obj.importpasspermitsGenDetailList;
      
  //   })
  // }

  updateaccept(status) {

    let postingobj = {
      "approvalStatus": status,
      // "createdBy": 0,
      // "createdDate": "2021-05-25T04:09:44.572Z",
      "entityId": 6,
      // "id": 0,
      "indentDate": this.importPermitStatusObj.indentDate,
      "indentNo": this.importPermitStatusObj.indentNo,
      // "modifiedBy": 0,
      // "modifiedDate": "2021-05-25T04:09:44.572Z",
      // "totBottlesRequested": 0,
      // "totCasesRequested": 0,
      // "unitName": "string"
    }
    this.importpasspermit.updatestatus(postingobj)
      .subscribe((resp: any)=> {
         if(resp.status == 's') {
          this.alert.showSuccess('Record' + " " + status + " " + 'Succesully','Success')
          this.router.navigate(['supplychainmanagement/warehouse/importpermitstatus/list']);
         }
      })

  }

}
