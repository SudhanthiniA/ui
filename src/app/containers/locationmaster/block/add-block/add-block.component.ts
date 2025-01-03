import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatemasterService, CountrymasterService,
  DistrictMasterService, TalukMasterService, VillageMasterService, BlockMasterService } from '@app/services';
import { AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss']
})
export class AddBlockComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  blockObject: any = {};
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
    private blockService: BlockMasterService,
    private districtService: DistrictMasterService,
    private countryService: CountrymasterService,
    private alert: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getCountry(null);
    this.blockObject.active = true;
    this.blockObject.country = '';
    this.blockObject.state = '';
    this.blockObject.district = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getBlockById(params.id);
        this.blockObject.id = params.id;
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
    this.blockObject.state = '';
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
    this.blockObject.districtId = '';
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

  addblock(blockForm) {
    this.formSubmitted = false;
    if (blockForm.valid === false || this.districtRequired === false || this.countryRequired === false
      || this.stateRequired === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.blockObject.code,
        name: this.blockObject.name,
        districtId: this.blockObject.districtId ? this.blockObject.districtId[0].id : null,
        active: this.blockObject.active
      };
      if (this.blockObject.id) {
        postParam['id'] = this.blockObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.blockObject.id) ? this.blockService.updateblock(postParam) : this.blockService.addBlock(postParam))
        .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/location/block/list']);
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

  getBlockById(id) {
    this.blockService.getblockById(id).subscribe((responceData: any) => {
      this.blockObject = responceData.data;
     // this.blockObject.country = this.blockObject.countryResponseDto.id;
   //   this.getState(this.blockObject.countryResponseDto.id);
   //   this.blockObject.state = this.blockObject.stateResponseDto.id;
    //  this.getDistrict(this.blockObject.stateResponseDto.id);
    //  this.blockObject.districtId = this.blockObject.districtResponseDto.id;
      this.getStatesByCountryId(this.blockObject.countryResponseDto.id, null);
      this.blockObject.country =
      this.blockObject.countryResponseDto ? [{ id: this.blockObject.countryResponseDto.id, countryName: this.blockObject.countryResponseDto.countryName }] : null;
      this.countryRequired = true;
      this.blockObject.state =
      this.blockObject ? [{ id: this.blockObject.stateResponseDto.id, stateName: this.blockObject.stateResponseDto.stateName }] : null;
      this.stateRequired = true;
      this.getDistrictsByStateId(this.blockObject.stateResponseDto.id);
      this.blockObject.districtId =
      this.blockObject ? [{ id: this.blockObject.districtResponseDto.id, name: this.blockObject.districtResponseDto.name }] : null;
      this.districtRequired = true;
    });
  }

}
