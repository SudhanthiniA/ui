import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatemasterService, CountrymasterService, DistrictMasterService, MunicipalityMasterService } from '@app/services';
import { AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-municipality',
  templateUrl: './add-municipality.component.html',
  styleUrls: ['./add-municipality.component.scss']
})
export class AddMunicipalityComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  municipalityObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  countryDropDownSettings: IDropdownSettings;
  stateDropDownSettings: IDropdownSettings;
  districtDropDownSettings: IDropdownSettings;
  searchValueCountry = null;
  searchValueState = null;
  searchValueDistrict = null;
  countryRequired = false;
  stateRequired = false;
  districtRequired = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StatemasterService,
    private municipalitySer: MunicipalityMasterService,
    private districtService: DistrictMasterService,
    private countryService: CountrymasterService,
    private alert: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getCountry(null);
    this.municipalityObject.active = true;
    this.municipalityObject.country = '';
    this.municipalityObject.state = '';
    this.municipalityObject.district = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getMuncipalityById(params.id);
        this.municipalityObject.id = params.id;
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

  // getCountry() {
  //   this.countryService.getCountry().subscribe((responceData: any) => {
  //     this.countryData = responceData.data;
  //   });
  // }

  // getState(countryId) {
  //   if (countryId !== '') {
  //     this.stateService.getStateByCountryid(countryId).subscribe((responceData: any) => {
  //       this.stateData = responceData.data;
  //     });
  //   } else {
  //     this.stateData = [];
  //   }
  // }

  // getDistrict(stateId) {
  //   if (stateId !== '') {
  //     this.districtService.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
  //       this.districtData = responceData.data;
  //     });
  //   } else {
  //     this.districtData = [];
  //   }
  // }
  onItemSelect(item: any) {
    this.countryRequired = true;
    this.getStatesByCountryId(item.id, null);
    this.municipalityObject.state = '';
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
    this.municipalityObject.districtId = '';
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
  getMuncipalityById(id) {
    this.municipalitySer.getmunicipalityById(id).subscribe((responceData: any) => {
      this.municipalityObject = responceData;
      this.municipalityObject = responceData.data;
      // this.municipalityObject.country = this.municipalityObject.countryResponseDto.id;
      // this.getState(this.municipalityObject.countryResponseDto.id);
      // this.municipalityObject.state = this.municipalityObject.stateResponseDto.id;
      // this.getDistrict(this.municipalityObject.stateResponseDto.id);
      // this.municipalityObject.districtId = this.municipalityObject.districtResponseDto.id;
      this.getStatesByCountryId(this.municipalityObject.countryResponseDto.id, null);
      this.municipalityObject.country =
      this.municipalityObject.countryResponseDto ? [{ id: this.municipalityObject.countryResponseDto.id, countryName: this.municipalityObject.countryResponseDto.countryName }] : null;
      this.countryRequired = true;
      this.municipalityObject.state =
      this.municipalityObject ? [{ id: this.municipalityObject.stateResponseDto.id, stateName: this.municipalityObject.stateResponseDto.stateName }] : null;
      this.stateRequired = true;
      this.getDistrictsByStateId(this.municipalityObject.stateResponseDto.id);
      this.municipalityObject.districtId =
      this.municipalityObject ? [{ id: this.municipalityObject.districtResponseDto.id, name: this.municipalityObject.districtResponseDto.name }] : null;
      this.districtRequired = true;
    });
  }

  addmunicipality(municipalityForm) {
    this.formSubmitted = false;
    if (municipalityForm.valid === false || this.districtRequired === false || this.countryRequired === false
      || this.stateRequired === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.municipalityObject.code,
        name: this.municipalityObject.name,
        districtId: this.municipalityObject.districtId ? this.municipalityObject.districtId[0].id : null,
        active: this.municipalityObject.active
      };
      if (this.municipalityObject.id) {
        postParam['id'] = this.municipalityObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
((this.municipalityObject.id) ? this.municipalitySer.updateMunicipality(postParam) : this.municipalitySer.addMunicipality(postParam))
      .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/location/municipality/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });
      }
    });
    }
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }
}
