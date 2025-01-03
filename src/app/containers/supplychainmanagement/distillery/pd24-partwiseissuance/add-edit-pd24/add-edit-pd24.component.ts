import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService, AlertService } from '@app/services';

@Component({
  selector: 'app-add-edit-pd24',
  templateUrl: './add-edit-pd24.component.html',
  styleUrls: ['./add-edit-pd24.component.scss']
})
export class AddEditPd24Component implements OnInit {
  addpdobj: any;
  date: any;
  curDate = new Date();
  name: any;
  Pd24Form: any;
  editId: any;
  addpd24obj: any = {
    // distname:"",
    // validity2: '',
  };
  formSubmitted = false;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd24RequestById(params.id);
        this.addpd24obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  getPd24RequestById(id) {
    this.distileryService.getPd24ById(id).subscribe(responceData => {
      this.addpd24obj = responceData['data'];
    });
  }

  Addpd24record(form, status) {
    const paramdpd = {
      absoluteDate: this.addpd24obj.absoluteDate,
      rectifiedDate: this.addpd24obj.rectifiedDate,
      quantitySanction: this.addpd24obj.quantitySanction,
      institutionOrdesignation: this.addpd24obj.institutionOrdesignation,
      rectifiedSpirit: this.addpd24obj.rectifiedSpirit,
      absoluteAlcohol: this.addpd24obj.absoluteAlcohol,
      noOfPasses1: this.addpd24obj.noOfPasses1,
      quantityInLtr1: this.addpd24obj.quantityInLtr1,
      noOfPasses2: this.addpd24obj.noOfPasses2,
      quantityInltr2: this.addpd24obj.quantityInltr2,
      status
    };
    this.formSubmitted = false;
    if (form.valid === false && status === true) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        paramdpd['id'] = this.editId;
        // const url = apiUrls.pd24IssuanceUpdate
        this.distileryService.updatePd24(paramdpd).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd24-partwiseissuance/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      } else {
        this.distileryService.addPd24(paramdpd).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd24-partwiseissuance/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.addpd24obj));
    this.router.navigate(['/supplychainmanagement/distillery/pd24-partwiseissuance/preview']);
  }

}
