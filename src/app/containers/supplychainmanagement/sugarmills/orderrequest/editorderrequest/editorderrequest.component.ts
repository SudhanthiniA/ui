import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { SugarmillapiService, IndentRequestService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
@Component({
  selector: 'app-editorderrequest',
  templateUrl: './editorderrequest.component.html',
  styleUrls: ['./editorderrequest.component.scss']
})
export class EditorderrequestComponent implements OnInit {
  orderrequestObj: any = {};
  formSubmitted = false;
  addedit: any;
  curDate = new Date();
  viewId: any;
  date: any;
  commentsList: any;
  orderrequestObj2: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private apiService: SugarmillapiService,
    private alert: AlertService,
    private IndentRequestService: IndentRequestService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
      this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    });
  }
  Transportgenerate(statuss, orderrequestForm) {
    this.formSubmitted = true;
    if (orderrequestForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          const postParam = {
            id: this.viewId,
            remarks: this.orderrequestObj.remarks,
            status: statuss
          };
          this.IndentRequestService.approveIndent(postParam).subscribe((responseData: any) => {
            if (responseData.status === 's') {
              this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
              this.router.navigate(['/supplychainmanagement/sugarmills/indentrequest/list']);
            } else {
              this.alert.showError(responseData.userDisplayMesg, 'error');
            }
          })
          // }
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
  setData(id) {
    this.IndentRequestService.indentGetById(id).subscribe((responceData: any) => {
      this.orderrequestObj = responceData.data;
    })
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.apiService.postPrint(url).then((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'IndentRequest'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
