import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { StatemasterService, CountrymasterService,
  DistrictMasterService, TalukMasterService, VillageMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-village',
  templateUrl: './add-village.component.html',
  styleUrls: ['./add-village.component.scss']
})
export class AddVillageComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  villageObject: any = {
    active: true,
    country: '',
    state: '',
    districtId: '',
    talukId: ''
  };
  countryDropDownSettings: IDropdownSettings;
  stateDropDownSettings: IDropdownSettings;
  districtDropDownSettings: IDropdownSettings;
  talukDropDownSettings: IDropdownSettings;
  searchValueCountry = null;
  searchValueState = null;
  searchValueDistrict = null;
  searchValueTaluk = null;
  countryRequired = false;
  stateRequired = false;
  districtRequired = false;
  talukRequired = false;
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  taulkData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private stateService: StatemasterService,
    private districtService: DistrictMasterService,
    private talukService: TalukMasterService,
    private modalService: NgbModal,
    private villageService: VillageMasterService,
    private countryService: CountrymasterService) { }

  ngOnInit() {
    this.getCountry(null);
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getVillageById(params.id);
        this.villageObject.id = params.id;
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
    this.talukDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'talukName',
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
    this.villageObject.state = '';
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
    this.villageObject.districtId = '';
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
    this.getTalukByDistrictId(item.id);
    this.villageObject.talukId = '';
    this.talukRequired = false;
  }
  onDistrictDeselect(item: any) {
    this.districtRequired = false;
  }
  onFilterChangeDistrict(item: any) {
    if (item.length > 2) {
      this.searchValueDistrict = item;
      this.getDistrict(this.searchValueDistrict);
    } else if (item.length === 0) {
      this.searchValueDistrict = null;
      this.getDistrict(this.searchValueDistrict);
    }
  }

  onDropDownCloseDistrict() {
    if (this.searchValueDistrict !== null) {
      this.searchValueDistrict = null;
      this.getDistrict(this.searchValueDistrict);
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
  onTalukSelect(item: any) {
    this.talukRequired = true;
  }
  onTalukDeselect(item: any) {
    this.talukRequired = false;
  }
  onFilterChangeTaluk(item: any) {
    if (item.length > 2) {
      this.searchValueTaluk = item;
      this.getTaluk(this.searchValueTaluk);
    } else if (item.length === 0) {
      this.searchValueTaluk = null;
      this.getTaluk(this.searchValueTaluk);
    }
  }

  onDropDownCloseTaluk() {
    if (this.searchValueTaluk !== null) {
      this.searchValueTaluk = null;
      this.getTaluk(this.searchValueTaluk);
    }
  }
  getTaluk(talukname) {
    const requestParam = {
      filters: {talukName: talukname, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.talukService.searchTaluk(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.taulkData = resp.data.contents;
        }
      });
  }
  getTalukByDistrictId(distId) {
    if (distId !== '') {
      this.talukService.gettalukByDistId(distId).subscribe((responceData: any) => {
        this.taulkData = responceData.data;
      });
    } else {
      this.taulkData = [];
    }
  }
  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addvillage(villageForm) {
    this.formSubmitted = false;
    if (villageForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.villageObject.code,
        name: this.villageObject.name,
        talukId: this.villageObject.talukId,
        active: this.villageObject.active
      };
      if (this.villageObject.id) {
        postParam['id'] = this.villageObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.villageObject.id) ? this.villageService.updateVillage(postParam) : this.villageService.addVillage(postParam))
          .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/location/village/list']);
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

  getVillageById(id) {
    this.villageService.getvillageById(id).subscribe((responceData: any) => {
      this.villageObject = responceData.data;
      this.villageObject.name = this.villageObject.name;
      // this.villageObject.country = this.villageObject.countryResponseDto.id;
      // this.getState(this.villageObject.countryResponseDto.id);
      // this.villageObject.state = this.villageObject.stateResponseDto.id;
      // this.getDistrict(this.villageObject.stateResponseDto.id);
      // this.villageObject.districtId = this.villageObject.districtResponseDto.id;
      // this.getTaulk(this.villageObject.districtResponseDto.id);
      this.getStatesByCountryId(this.villageObject.countryResponseDto.id, null);
      this.villageObject.country =
      this.villageObject.countryResponseDto ? [{ id: this.villageObject.countryResponseDto.id, countryName: this.villageObject.countryResponseDto.countryName }] : null;
      this.countryRequired = true;
      this.villageObject.state =
      this.villageObject ? [{ id: this.villageObject.stateResponseDto.id, stateName: this.villageObject.stateResponseDto.stateName }] : null;
      this.stateRequired = true;
      this.getDistrictsByStateId(this.villageObject.stateResponseDto.id);
      this.villageObject.districtId =
      this.villageObject ? [{ id: this.villageObject.districtResponseDto.id, name: this.villageObject.districtResponseDto.name }] : null;
      this.districtRequired = true;
      this.villageObject.talukId = this.villageObject ? [{ id: this.villageObject.talukResponseDto.id, talukName: this.villageObject.talukResponseDto.talukName }] : null;
      this.talukRequired = true;
    });
  }

}
