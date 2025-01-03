import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, DistileryService } from '@app/services';

@Component({
  selector: 'app-addeditexportorder',
  templateUrl: './addeditexportorder.component.html',
  styleUrls: ['./addeditexportorder.component.scss']
})
export class AddeditexportorderComponent implements OnInit {

  exportorderObj: any = {
    importOrderNumber: '1457',
    nameOfImportingUnit: 'Rampur Distillery (Relico)',
    importOrderDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
    validityDemanded: '',
    performanceInvoiceNo: '',
    uploadPerformaInvoice: '',
    uploadpuc: '',
    // requesteddate: "",
    status: false,
  };
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  ordernumlist = [{ id: 1, name: '1458' }, { id: 2, name: '1457' }];
  addedit: any;
  popupFlag: boolean;
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alert: AlertService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    // this.exportorderObj.appdate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getexportorderById(params.id);
        this.exportorderObj.id = params.id;
        this.editId = params.id;
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  ShowPOpUp(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status === 2) {
      this.formSubmitted = true;
    } else {
      console.log('test test');
      this.popupFlag = true;
      const el: HTMLElement = this.myDiv.nativeElement;
      el.click();
    }
  }

  saveData(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status === 2) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        this.exportorderObj[`status`] = (status === 1) ? false : true;
        this.exportorderObj.id = this.editId;

        this.distileryService.UpdateExportorder(this.exportorderObj).subscribe((response: any) => {
          if (response.status == 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/exportorder/list']);
          } else {
            this.alert.showError(response.userDisplayMesg, 'error')
          }
        });
      } else {
        this.exportorderObj[`status`] = (status === 2) ? true : false;
        console.log('distlary-->>', this.exportorderObj);

        this.distileryService.addExportorder(this.exportorderObj).subscribe((respoonse: any) => {
          if (respoonse.status == 's') {
            this.alert.showSuccess(respoonse.userDisplayMesg, 'Success')
            this.router.navigate(['/supplychainmanagement/distillery/exportorder/list']);
          } else {
            this.alert.showError(respoonse.userDisplayMesg, 'error')
          }
        });
      }

    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.exportorderObj));
    this.router.navigate(['/supplychainmanagement/distillery/exportorder/preview']);
  }
  getexportorderById(id?) {
    if (id) {
      this.distileryService.getExportorderbyid(id).subscribe((response: any) => {
        if (response.status === 's') {
          this.exportorderObj = response.data;
        }
      });
    }
  }
}
