import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, CensusService, DistrictMasterService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-addeditcencusdataofdistricts',
  templateUrl: './addeditcencusdataofdistricts.component.html',
  styleUrls: ['./addeditcencusdataofdistricts.component.scss']
})
export class AddeditcencusdataofdistrictsComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  lableList: Array<any> = [];
  cencusObj: any = {
    code: '',
    name: '',
    districtName: '',
    censusCount: '',
    isActive: true
  };
  date: any;
  districtList: any;
  editId: any;
  formSubmitted = false;
  districtDropDownSettings: IDropdownSettings;
  searchValue = null;
  districtRequired = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private censusService: CensusService,
    public patternService: PatternService,
    private districtService: DistrictMasterService
  ) { }

  ngOnInit() {
    this.getdistrict(null);
    this.cencusObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getByid(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.districtDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  getByid(id) {
    this.censusService.getCensusById(id).subscribe((resp: any) => {
      this.cencusObj = resp.data;
      this.cencusObj.districtObj = resp.data.districtName ? [{ id: resp.data.districtName, name: resp.data.districtName }] : null;
      this.districtRequired = true;
    });
  }

  onItemSelect(item: any) {
    this.districtRequired = true;
  }

  onItemDeselect(item: any) {
    this.districtRequired = false;
  }

  onFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValue = item;
      this.getdistrict(this.searchValue);
    } else {
      this.searchValue = null;
      this.getdistrict(this.searchValue);
    }
  }

  onDropDownClose() {
    if (this.searchValue !== null) {
      this.searchValue = null;
      this.getdistrict(this.searchValue);
    }
  }

  getdistrict(districtName) {
    const requestParam = {
      filters: { name: name, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.districtService.searchDistrict(requestParam).subscribe((resp: any) => {
      console.log(resp);
      if (resp.errorCode === 200) {
      this.districtList = resp.data.contents;
      }
    });
  }

  addcencus(cencusForm) {
    this.formSubmitted = false;
    if (cencusForm.valid === false || this.districtRequired === false) {
      this.formSubmitted = true;
    } else {
    const postParam = {
      id: this.editId,
      code: this.cencusObj.code,
      name: this.cencusObj.name,
      districtName: this.cencusObj.districtObj ? this.cencusObj.districtObj[0].name : null,
      censusCount: this.cencusObj.censusCount,
      isActive: this.cencusObj.isActive
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam.id = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.censusService.putCensus(postParam) : this.censusService.addCensus(postParam))
            .subscribe((resp: any) => {
              if (resp.status === 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'success');
                this.router.navigate(['/master/cencusdataofdistricts/list']);
              } else {
                this.alert.showError(resp.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigatecencusList() {
    this.router.navigate(['/master/cencusdataofdistricts/list']);
  }
}
