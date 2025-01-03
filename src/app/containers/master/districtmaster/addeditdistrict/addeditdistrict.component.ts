import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-addeditdistrict',
  templateUrl: './addeditdistrict.component.html',
  styleUrls: ['./addeditdistrict.component.scss']
})
export class AddeditdistrictComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  districtList: Array<any> = [];
  districtObj: any = {
    code : '',
    name : '',
    status : true
  };
  date: any;
  editId: any;
  formSubmitted = false;
  addedithead: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.districtObj.active = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.addedithead = this.router.url.includes('add') == true ?
    'Enter Below Details to Add District' : 'Enter Below Details to Edit District';
  }

  setData(id) {
    this.masterapiService.get(`${apiUrls.getByIdDistrict}${id}`).then((responceData: any) => {
      this.districtObj = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  adddistrict(districtForm) {
    this.formSubmitted = false;
    if (districtForm.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const postParam = {
          id: this.editId,
          code: this.districtObj.code,
          name: this.districtObj.name,
          modifiedBy: sessionStorage.getItem('loggeduser'),
          active: this.districtObj.active
        };
        this.masterapiService.put(apiUrls.updateBrandMaster, postParam).then(responceData => {
          this.router.navigate(['/master/district/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        const postParam = {
          code: this.districtObj.code,
          name: this.districtObj.name,
          createdBy: sessionStorage.getItem('loggeduser'),
          active: this.districtObj.active
        };
        this.masterapiService.post(apiUrls.addConsumType, postParam).then((responceData: any) => {
          this.router.navigate(['/master/district/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }

  navigatedistrictList() {
    this.router.navigate(['master/district/list']);
  }

}
