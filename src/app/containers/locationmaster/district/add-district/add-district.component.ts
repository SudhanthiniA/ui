import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, StatemasterService, CountrymasterService, DistrictMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.scss']
})
export class AddDistrictComponent implements OnInit {

  countryData: any;
  stateData: any;
  districtObject: any = {
    country_id: '',
    stateId: ''
  };
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  editId: any;
  countryDropDownSettings: IDropdownSettings;
  stateDropDownSettings: IDropdownSettings;
  searchValueCountry = null;
  searchValueState = null;
  countryRequired = false;
  stateRequired = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private stateService: StatemasterService,
    private districtService: DistrictMasterService,
    private countryService: CountrymasterService,
    private modalService: NgbModal,

  ) { }

  ngOnInit() {
    this.getCountry(null);
    // this.getState();
    this.districtObject.active = true;
    this.districtObject.country = '';
    this.districtObject.stateId = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getDistrictById(params.id);
        this.editId = params.id;
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
  }
  onItemSelect(item: any) {
    this.countryRequired = true;
    this.getStatesByCountryId(item.id, null);
    this.districtObject.stateId = '';
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
  }

  onStateDeselect(item: any) {
    this.stateRequired = false;
  }
  
  onFilterChangeState(item: any) {
    if (item.length > 2) {
      this.searchValueState = item;
      this.getStatesByCountryId(this.districtObject.country_id, this.searchValueState);
    } else if (item.length === 0) {
      this.searchValueState = null;
      this.getStatesByCountryId(this.districtObject.country_id, null );
    }
  }

  onDropDownCloseState() {
    if (this.searchValueState !== null) {
      this.searchValueState = null;
      this.getCountry(this.searchValueState);
    }
  }

  

  getStatesByCountryId(countryId, stateName) {
    if (countryId !== '') {
      this.stateData = ''
      this.stateService.getStateByCountryid(countryId).subscribe((responceData: any) => {
        this.stateData = responceData.data;
      });

      /*const requestParam = {
        filters: { countryName: countryId, stateName: stateName, active: true },
        pageNo: 0, paginationSize: 10
      };
      this.stateService.searchState(requestParam)
        .subscribe((resp: any) => {
          if (resp.errorCode === 200) {
            this.countryData = resp.data.contents;
          }
        });*/

    } else {
      this.stateData = [];
    }
  }
  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  adddistrict(districtForm) {
    this.formSubmitted = false;
    if (districtForm.valid === false || this.countryRequired === false || this.stateRequired === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        name: this.districtObject.name,
        code: this.districtObject.code,
        shortName: this.districtObject.shortName,
        stateId: this.districtObject.stateId ? this.districtObject.stateId[0].id : null,
        active: this.districtObject.active
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.districtService.putDistrict(postParam) : this.districtService.addDistrict(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/location/district/list']);
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

  getDistrictById(id) {
    this.districtService.getdistrictById(id).subscribe((resp: any) => {
      this.districtObject = resp.data;
      this.getStatesByCountryId(resp.data.countryResponseDto.id, null);
      this.districtObject.country_id =
        resp.data.countryResponseDto ? [{ id: resp.data.countryResponseDto.id, countryName: resp.data.countryResponseDto.countryName }] : null;
      this.countryRequired = true;
      this.districtObject.stateId =
        resp.data ? [{ id: resp.data.stateResDto.id, stateName: resp.data.stateResDto.stateName }] : null;
      this.stateRequired = true;
    });
  }
}
