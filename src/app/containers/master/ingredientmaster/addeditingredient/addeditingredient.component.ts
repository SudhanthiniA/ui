import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { IngredientService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';


@Component({
  selector: 'app-addeditingredient',
  templateUrl: './addeditingredient.component.html',
  styleUrls: ['./addeditingredient.component.scss']
})
export class AddeditingredientComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  ingredientList: Array<any> = [];
  ingredientObj: any = {
  code : '',
  name : '',
  isActive : true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute,
              private alert: AlertService,
              private router: Router,
              private modalService: NgbModal,
              private ingredientService: IngredientService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.ingredientObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getByid(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  getByid(id) {
    this.ingredientService.getIngredientById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.ingredientObj = responceData.data;
    });
  }
  addIngredient(ingredientForm) {
    this.formSubmitted = false;
    if (ingredientForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.ingredientObj.code,
        name: this.ingredientObj.name,
        isActive: this.ingredientObj.isActive
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
      if (respData) {
        ((this.editId) ? this.ingredientService.updateIngredient(postParam) : this.ingredientService.addIngredient(postParam))
      .subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/ingrediantmaster/list']);

          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });
      }
    }).catch(err => {
      console.log('\n err...', err);
    });
      //  else {
      //   const postParam = {
      //     code: this.ingredientObj.code,
      //     name: this.ingredientObj.name,
      //     isActive: this.ingredientObj.isActive
      //   };
      //   this.ingredientService.addIngredient(postParam).subscribe((responceData: any) => {
      //     if (responceData.status === 's') {
      //       this.alert.showSuccess(responceData.userDisplayMesg, 'success');
      //       this.router.navigate(['/master/ingrediantmaster/list']);

      //     } else {
      //       this.alert.showError(responceData.userDisplayMesg, 'error');
      //     }
      //   });

      // }
    }
  }
  navigateingredientList() {
    this.router.navigate(['/master/ingrediantmaster/list']);
  }


}
