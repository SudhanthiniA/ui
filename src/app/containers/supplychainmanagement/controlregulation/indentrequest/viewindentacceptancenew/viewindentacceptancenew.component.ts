import { Component, OnInit } from '@angular/core';
import { IndentscceptaceService, AlertService } from '@app/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewindentacceptancenew',
  templateUrl: './viewindentacceptancenew.component.html',
  styleUrls: ['./viewindentacceptancenew.component.scss']
})
export class ViewindentacceptancenewComponent implements OnInit {
  editId: any;
  indentacceptlist: any;
  totBulkLTR: any = 0;
  // status: any;
  bondWarehouse: any;

  constructor(private indentacceptance: IndentscceptaceService,
    private route: ActivatedRoute, private alert: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('active route', params)
      if (params.id) {
        this.editId = params.id;
        this.getById(this.editId)
      }
    });
  }

  getById(id) {
    this.indentacceptance.indentbyid(id)
    .subscribe((resp: any) => {
      if(resp.status == 's'){
        this.indentacceptlist = resp.data;
      // resp.data.indentRequestDetails.indentProductList.forEach((ele,i)=>{
      //       this.totBulkLTR = this.totBulkLTR + ele.noOfBottles;
      //  })
     
      }
    })
  }

 
  acceptrecord(status) {
    let postdata = {
        "approvalStatus": status,
        "entityId": 6,
        "id": this.editId,
        "indentDate": this.indentacceptlist.indentDate,
        "indentNo": this.indentacceptlist.indentNo,
        "unitName": "wholesale",
        "totBottlesRequested": this.indentacceptlist.indentRequestDetails.totalNoOfBottles,
        "totCasesRequested": this.indentacceptlist.indentRequestDetails.totalNoOfCases
    }

    this.indentacceptance.indentacceptance(postdata)
    .subscribe((resp: any) => {
       if(resp.status == 's') {
         this.alert.showSuccess("Record"+ " " + status + " " + "Successfully","Success")
         this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/list'])
       }
    })
  }



  // back(){
  //   this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/list'], { queryParams: { status: this.status} })
  // }
}
