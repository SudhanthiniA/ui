import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, StatemasterService, CountrymasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {

  countryData: any;
  stateObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  id: any;
  countryDropDownSettings: IDropdownSettings;
  searchValue = null;
  countryRequired = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StatemasterService,
    private countryService: CountrymasterService,
    private alert: AlertService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getCountry(null);
    this.stateObject.active = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getStateById(params.id);
        this.id = params.id;
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
  }

  onItemSelect(item: any) {
    this.countryRequired = true;
  }

  onItemDeselect(item: any) {
    this.countryRequired = false;
  }


  onFilterChange(item: any) {
    console.log(item);
    if (item.length > 2) {
      this.searchValue = item;
      this.getCountry(this.searchValue);
    } else if (item.length === 0) {
      this.searchValue = null;
      this.getCountry(this.searchValue);
    }
  }

  onDropDownClose() {
    if (this.searchValue !== null) {
      this.searchValue = null;
      this.getCountry(this.searchValue);
    }
  }

  getCountry(countryName) {
    const requestParam = {
      filters: { countryName: countryName, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.countryService.searchCountry(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.countryData = resp.data.contents;
        }
      });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addstate(stateForm) {
    this.formSubmitted = false;
    if (stateForm.valid === false || this.countryRequired === false) {
      this.formSubmitted = true;
    } else {

      console.log(this.stateObject);
      const postParam = {
        stateCode: this.stateObject.stateCode,
        shortName: this.stateObject.shortName,
        stateName: this.stateObject.stateName,
        countryId: this.stateObject.countryObj ? this.stateObject.countryObj[0].id : null,
        unionTerritory: this.stateObject.unionTerritory,
        active: this.stateObject.active
      };

      if (this.stateObject.id) {
        postParam['id'] = this.id;
      }

      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.stateObject.id) ? this.stateService.putState(postParam) : this.stateService.addState(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/location/state/list']);
                console.log(resp);
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

  getStateById(id) {
    this.stateService.getStateById(id)
      .subscribe((resp: any) => {
        this.stateObject = resp.data;
        this.stateObject.countryObj = resp.data.country ? [{ id: resp.data.country.id, countryName: resp.data.country.countryName }] : null;
        this.countryRequired = true;
      });
  }
}
