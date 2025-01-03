import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, DivisionService, PatternService } from '@app/services';
import { TreasuryService } from '@app/services/masters/treasury.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
    selector: 'app-addtreasury',
    templateUrl: './addtreasury.component.html',
    styleUrls: ['./addtreasury.component.scss']
  })
export class AddTreasuryComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  treasuryList: Array<any> = [];
  treasuryObj: any = {
    treasuryCode: '',
    treasuryName: '',
    divisionid: '',
    isActive: true
  };
  date: any;
  editId: any;
  formSubmitted = false;
  divisionList: any;
  divisionDropDownSettings: IDropdownSettings;
  searchValue = null;
  divisionRequired = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TreasuryService,
    private division: DivisionService,
    private modalService: NgbModal,
    public patternService: PatternService,
    private alert: AlertService) {
  }

    ngOnInit() {
      this.getDivision(null);
      this.treasuryObj.isActive = true;
      this.route.params.subscribe(params => {
        if (params.Id) {
          this.editId = params.Id;
          this.setData(this.editId);
        }
      });
      this.divisionDropDownSettings = {
        singleSelection: true,
        idField: 'id',
        textField: 'divisionName',
        allowSearchFilter: true,
        closeDropDownOnSelection: true
      };
      this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    }

    setData(id) {
      this.service.getTreasuryById(id).subscribe((resp: any) => {
        this.treasuryObj = resp.data;
        this.treasuryObj.divisionObj = resp.data.divisionName ? [{ id: resp.data.divisionId, divisionName: resp.data.divisionName }] : null;
        this.divisionRequired = true;
      });
    }

    onItemSelect(item: any) {
      this.divisionRequired = true;
    }
  
    onItemDeselect(item: any) {
      this.divisionRequired = false;
    }
  
    onFilterChange(item: any) {
      if (item.length > 2) {
        this.searchValue = item;
        this.getDivision(this.searchValue);
      } else {
        this.searchValue = null;
        this.getDivision(this.searchValue);
      }
    }
  
    onDropDownClose() {
      if (this.searchValue !== null) {
        this.searchValue = null;
        this.getDivision(this.searchValue);
      }
    }
  

    getDivision(divisionName){
      const requestParam = {
        filters: { divisionName: divisionName, isActive: true },
        pageNo: 0, paginationSize: 10
      };
      this.division.searchDivision(requestParam).subscribe((resp: any) => {
        if (resp.errorCode === 200) {
        this.divisionList = resp.data.contents;
        }
      });
    }

    addTreasury(treasuryForm) {
      this.formSubmitted = false;
      if (treasuryForm.valid === false || this.divisionRequired === false) {
        this.formSubmitted = true;
      } else {
        const postParam = {
          treasuryCode: this.treasuryObj.treasuryCode,
          treasuryName: this.treasuryObj.treasuryName,
          divisionid: this.treasuryObj.divisionObj ? this.treasuryObj.divisionObj[0].id : null,
          isActive: this.treasuryObj.isActive,
        };
        if (this.editId) {
          postParam['id'] = this.editId;
        }
        const modalRef = this.modalService.open(CommonPopupComponent);
        modalRef.result.then(respData => {
          if (respData) {
            ((this.editId) ? this.service.updateTreasury(postParam) : this.service.addTreasury(postParam))
              .subscribe((responceData: any) => {
                if (responceData.status == 's') {
                  this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                  this.router.navigate(['/master/treasury/list']);
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
    navigatepenaltyList() {
      this.router.navigate(['/master/treasury/list']);
    }
  
  }
  
