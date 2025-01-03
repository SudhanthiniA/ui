import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, SubcategoryService } from '@app/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  state: any;
  districts: any;
  taluk: any;
  formSubmitted = false;
  sub: any;
  cat: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private subcategory: SubcategoryService
  ) { }

  ngOnInit() {
    this.createFormGrp();
    if (this.createObj) {
      this.setData();
    }
    // this.getsub();
    this.getcat();
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      categoryid: ['', Validators.required],
      subCategoryName: ['', Validators.required],
      active: ['', Validators.required]
    });
  }

  setData() {
    this.createForm.patchValue(this.createObj);
  }
  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const postData = this.createForm.value;
      console.log(postData);

      this.subcategory.addsubcategory(postData).subscribe(
        (responceData) => {
          if (responceData.status == "s") {
            this.exampleModalCenter.show();
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/helpdeskmaster/subcategory/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      );
    }
  }
  // getsub($event) {
  //   console.log($event.target.value)
  //   this.subcategory.getByIdcategory($event.target.value).subscribe((responceData: any) => {
  //     console.log(responceData);

  //     this.sub = (responceData.status === 's') ? responceData.data : [];
  //   });
  // }
  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {
      console.log(responceData);

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }

  clearform() {
    this.createForm.reset();
  }
}
