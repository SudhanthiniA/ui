import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ReturnWorklistService } from '@app/services/wholesale/return-worklist.service';

@Component({
  selector: 'app-addreturnworklist',
  templateUrl: './addreturnworklist.component.html',
  styleUrls: ['./addreturnworklist.component.scss']
})
export class AddreturnworklistComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  params1:any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private returnlist: ReturnWorklistService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.createFormGrp();
    if (this.createObj) {
      this.setData();
    }
    this.route.params.subscribe(params => {
      if (params['Id']) {
        // console.log(params['Id'])
        this.params1 = params['Id'];
        console.log(this.params1);
        
        this.getbyId(this.params1)
        // this.show=false
      }
    });
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      toUnitName: ['', Validators.required],
      shopAddress: ['', Validators.required],
      fromUnitName: ['', Validators.required],
      unitType: [''],
      unitAddress: ['', Validators.required],
      scanQR: ['', Validators.required],
      qrCode: ['', Validators.required],
    });
  }
  setData() {
    this.createForm.patchValue(this.createObj);
  }
  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } 
    else {
      const postData = this.createForm.value;
if(!this.params1){
      this.returnlist.createreturn(postData).subscribe(
        (responceData) => {
            this.alert.showSuccess('Record Created Successfully','Success');
            this.createForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/returnworklist/list']);
            sessionStorage.removeItem('formdata');
        }
      );
    }
    else if(this.params1){
      this.returnlist.updatereturn(postData,this.params1).subscribe(
        (responceData) => {
            this.alert.showSuccess('Record Updated Successfully','Success');
            this.createForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/returnworklist/list']);
            sessionStorage.removeItem('formdata');
        }
      ); 
    }
  }
  }
  cancel(){
    this.createForm.reset();
  }
  view(createForm){
    this.router.navigate(['/supplychainmanagement/wholesale/returnworklist/view']);
    sessionStorage.setItem('formdata', JSON.stringify(createForm.value));
  }
  getbyId(id) {  
    // let Id= {
    //   id : id
    // }
    this.returnlist.getById(id).toPromise().then((response: any) => {
      // if (response.status== true) {
      console.log(response);
      // response.results.forEach((element,index) => {
        this.createForm.patchValue(response);
      // }); 
      // }
    }).catch((err: any) => {
    });
  } 
}
