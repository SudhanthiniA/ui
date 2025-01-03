import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatemasterService, CountrymasterService, DistrictMasterService, TalukMasterService } from '@app/services';
import { AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-taulk',
  templateUrl: './add-taulk.component.html',
  styleUrls: ['./add-taulk.component.scss']
})
export class AddTaulkComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  taulkObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  countryDropDownSettings: IDropdownSettings;
  stateDropDownSettings: IDropdownSettings;
  districtDropDownSettings: IDropdownSettings;
  searchValueCountry = null;
  searchValueState = null;
  searchValueDistrict = null;
  countryRequired = false;
  stateRequired = false;
  districtRequired = false;
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StatemasterService,
    private districtService: DistrictMasterService,
    private talukService: TalukMasterService,
    private countryService: CountrymasterService,
    private alert: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getCountry(null);
    this.taulkObject.active = true;
    this.taulkObject.country = '';
    this.taulkObject.state = '';
    this.taulkObject.districtId = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTaulkById(params.id);
        this.taulkObject.id = params.id;
        this.addedit = 'Edit';
      }
    });
    this.countryDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'countryName',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.stateDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'stateName',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.districtDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  onItemSelect(item: any) {
    this.countryRequired = true;
    this.getStatesByCountryId(item.id, null);
    this.taulkObject.state = '';
    this.stateRequired = false;
  }

  onItemDeselect(item: any) {
    this.countryRequired = false;
  }


  onFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValueCountry = item;
      this.getCountry(this.searchValueCountry);
    } else if (item.length === 0) {
      this.searchValueCountry = null;
      this.getCountry(this.searchValueCountry);
    }
  }

  onDropDownClose() {
    if (this.searchValueCountry !== null) {
      this.searchValueCountry = null;
      this.getCountry(this.searchValueCountry);
    }
  }

  getCountry(Countryname) {
    const requestParam = {
      filters: { countryName: Countryname, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.countryService.searchCountry(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.countryData = resp.data.contents;
        }
      });
  }
  onStateSelect(item: any) {
    this.stateRequired = true;
    this.getDistrictsByStateId(item.id);
    this.taulkObject.districtId = '';
    this.districtRequired = false;
  }
  onStateDeselect(item: any) {
    this.stateRequired = false;
  }
  onFilterChangeState(item: any) {
    if (item.length > 2) {
      this.searchValueState = item;
      this.getStates(this.searchValueState);
    } else if (item.length === 0) {
      this.searchValueState = null;
      this.getStates(this.searchValueState);
    }
  }

  onDropDownCloseState() {
    if (this.searchValueState !== null) {
      this.searchValueState = null;
      this.getStates(this.searchValueState);
    }
  }
  getStates(statename) {
    const requestParam = {
      filters: { stateName: statename, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.stateService.searchState(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.stateData = resp.data.contents;
        }
      });
  }
  getStatesByCountryId(countryId, stateName) {
    if (countryId !== '') {
      this.stateService.getStateByCountryid(countryId).subscribe((responceData: any) => {
        this.stateData = responceData.data;
      });
    } else {
      this.stateData = [];
    }
  }
  ondistrictSelect(item: any) {
    this.districtRequired = true;
  }
  onDistrictDeselect(item: any) {
    this.districtRequired = false;
  }
  onFilterChangeDistrict(item: any) {
    if (item.length > 2) {
      this.searchValueDistrict = item;
      this.getDistrict(this.searchValueDistrict);
    } else if (item.length === 0) {
      this.searchValueState = null;
      this.getDistrict(this.searchValueDistrict);
    }
  }

  onDropDownCloseDistrict() {
    if (this.searchValueState !== null) {
      this.searchValueState = null;
     // this.getDistrict(this.searchValueState);
    }
  }
  getDistrict(districtName) {
    const requestParam = {
      filters: { district_name: districtName, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.districtService.searchDistrict(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.districtData = resp.data.contents;
        }
      });
  }
  getDistrictsByStateId(stateId) {
    if (stateId !== '') {
      this.districtService.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
        this.districtData = responceData.data;
      });
    } else {
      this.districtData = [];
    }
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addtaulk(taulkForm) {
    this.formSubmitted = false;
    if (taulkForm.valid === false || this.districtRequired === false || this.countryRequired === false
      || this.stateRequired === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        talukName: this.taulkObject.name,
        districtId: this.taulkObject.districtId ? this.taulkObject.districtId[0].id : null,
        active: this.taulkObject.active
      };
      if (this.taulkObject.id) {
        postParam['id'] = this.taulkObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.taulkObject.id) ? this.talukService.putTaulk(postParam) : this.talukService.addTaluk(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/location/taluk/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getTaulkById(id) {
    this.addedit = 'Edit';
    this.talukService.gettalukById(id).subscribe((responceData: any) => {
      const taulkData = responceData.data;
      this.taulkObject.name = taulkData.talukName;
      this.getStatesByCountryId(taulkData.countryResponseDto.id, null);
      this.taulkObject.country =
        taulkData.countryResponseDto ? [{ id: taulkData.countryResponseDto.id, countryName: taulkData.countryResponseDto.countryName }] : null;
      this.countryRequired = true;
      this.taulkObject.state =
        taulkData ? [{ id: taulkData.stateResponseDto.id, stateName: taulkData.stateResponseDto.stateName }] : null;
      this.stateRequired = true;
      this.getDistrictsByStateId(taulkData.stateResponseDto.id);
      this.taulkObject.districtId =
        taulkData ? [{ id: taulkData.districtResponseDto.id, name: taulkData.districtResponseDto.name }] : null;
      this.districtRequired = true;
      this.taulkObject.active = taulkData.active;
    });
  }
}
