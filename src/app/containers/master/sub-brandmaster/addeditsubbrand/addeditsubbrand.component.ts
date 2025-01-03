import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterapiService, AlertService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-addeditsubbrand',
  templateUrl: './addeditsubbrand.component.html',
  styleUrls: ['./addeditsubbrand.component.scss']
})
export class AddeditsubbrandComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: any;
  subBrandObj: any = {
    code: '',
    name: '',
    brandName: '',
    quantity: '',
    active: true
  };
  date: any;
  brandlist: any;
  editId: any;
  formSubmitted = false;
  brandList: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterapiService: MasterapiService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.getBrand();
    this.subBrandObj.active = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }
  
  getBrand() {
    this.masterapiService.get(apiUrls.getAllBrandMaster).then((responceData: any) => {
      this.brandList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  setData(id) {
    this.masterapiService.get(`${apiUrls.getsubbrandbyid}?id=${id}`).then((responceData: any) => {
      this.subBrandObj = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  addSubbrand(subBrandForm) {
    this.formSubmitted = false;
    if (subBrandForm.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const postParam = {
          id: this.editId,
          code: this.subBrandObj.code,
          name: this.subBrandObj.name,
          // brandName: this.subBrandObj.brandName,
          // quantity: this.subBrandObj.quantity,
          modifiedBy: 'Admin',
          active: this.subBrandObj.active
        };
        const url = apiUrls.updatesubbrand;
        this.masterapiService.put(url, postParam).then((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/liquortype/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        const postParam = {
          code: this.subBrandObj.code,
          name: this.subBrandObj.name,
          // brandName: this.subBrandObj.brandName,
          // quantity: this.subBrandObj.quantity,
          // createdBy: 'Admin',
          active: this.subBrandObj.active
        };
        this.masterapiService.post(apiUrls.postsubbrand, postParam).then((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/liquortype/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateliquorList() {
    this.router.navigate(['master/liquortype/list']);
  }

}
