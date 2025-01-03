import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { WholesaleLicenseRenewalService } from '@app/services/wholesale';

@Component({
  selector: 'app-addlicense',
  templateUrl: './addlicense.component.html',
  styleUrls: ['./addlicense.component.scss']
})
export class AddlicenseComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  params1:any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private wholesaleLicenseRenewalService: WholesaleLicenseRenewalService,
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
      licenseType: ['Type 1', Validators.required],
      applicationType: ['Type 1', Validators.required],
      districtGodownLocation: ['Lucknow', Validators.required],
      godownLocation: ['Lucknow', Validators.required],
      applicationName: ['Neeraj', Validators.required],
      applicanatFather: ['Late Murali', Validators.required],
      applicationDob: ['2021-04-26', Validators.required],
      Gender:['Male', Validators.required],
      applicantAadharNo: ['654516215', Validators.required],
      applicantPanNo:['MADE564484F', Validators.required],
      applicantMobileNo:['8888888888', Validators.required],
      applicantEmailId:['abcd@gmail.com', Validators.required],
      dateOfSolvency:['', Validators.required],
      nameOfState:['', Validators.required],
      nameOfDistrict:['', Validators.required],
      valueSolvency:['', Validators.required],
      nameAddTaxValuer:['', Validators.required],
      houseNo:['2-48',Validators.required],
      Locality:['Near Coromondal',Validators.required],
      State:['Uttar Pradesh',Validators.required],
      District:['Lucknow',Validators.required]
    });
  }
  setData() {
    this.createForm.patchValue(this.createObj);
  }
  getbyId(id) {  
    // let Id= {
    //   id : id
    // }
    this.wholesaleLicenseRenewalService.getByIdlicense(id).toPromise().then((response: any) => {
      // if (response.status== true) {
      console.log(response);
      // response.results.forEach((element,index) => {
        this.createForm.patchValue(response);
      // }); 
      // }
    }).catch((err: any) => {
    });
  } 
  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } 
    else {
      const postData = this.createForm.value;
if(!this.params1){
      this.wholesaleLicenseRenewalService.createlicense(postData).subscribe(
        (responceData) => {
            this.alert.showSuccess('Record Created Successfully','Success');
            this.createForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/licenserenewal/list'])
        }
      );
    }
    else if(this.params1){
      this.wholesaleLicenseRenewalService.updatelicense(postData,this.params1).subscribe(
        (responceData) => {
            this.alert.showSuccess('Record Updated Successfully','Success');
            this.createForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/licenserenewal/list'])
        }
      ); 
    }
  }
  }
}
