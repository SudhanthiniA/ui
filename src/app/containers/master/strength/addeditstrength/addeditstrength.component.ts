import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, LiquorCategoryService, StrengthService } from '@app/services';

@Component({
  selector: 'app-addeditstrength',
  templateUrl: './addeditstrength.component.html',
  styleUrls: ['./addeditstrength.component.scss']
})
export class AddeditstrengthComponent implements OnInit {

  strengthObj: any = {
    code: '',
    strength: '',
    category: '',
    isActive: true
  };
  addedit = 'Add';
  liquorCategoryList: any;
  formSubmitted: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: StrengthService,
    private alert: AlertService,
    private liquorService: LiquorCategoryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getStrengthById(params.id);
        this.strengthObj.id = params.id;
        this.addedit = 'Edit';
      }
    });
    this.liquorCategory();
  }
  liquorCategory() {
    this.liquorService.getAllLiquor().subscribe((responceData: any) => {
      console.log(responceData);
      this.liquorCategoryList = responceData.data;
    });
  }
  getStrengthById(id) {
    this.service.getStrengthById(id).subscribe((responceData: any) => {
      this.strengthObj = responceData.data;
      console.log(this.strengthObj);
    });
  }
  saveData(strengthForm) {

    this.formSubmitted = false;
    console.log(strengthForm.valid);
    if (strengthForm.valid === false) {
      this.formSubmitted = true;
    } else {
      console.log(this.strengthObj);
      if (this.strengthObj.id) {
        const postParam = {
          id: this.strengthObj.id,
          code: this.strengthObj.code,
          strength: this.strengthObj.strength,
          category: JSON.parse(this.strengthObj.category),
          isActive: this.strengthObj.isActive
        };
        this.service.updateStrength(postParam).subscribe((responceData: any) => {

          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/strength/list']);
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
        });
      } else {
        const postParam = {
          code: this.strengthObj.code,
          strength: this.strengthObj.strength,
          category: JSON.parse(this.strengthObj.category),
          isActive: this.strengthObj.isActive
        };
console.log(postParam);
        this.service.addStrength(postParam).subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/strength/list']);
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
        });
      }
    }
  }
}
