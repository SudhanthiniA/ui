import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-addeditbottling',
  templateUrl: './addeditbottling.component.html',
  styleUrls: ['./addeditbottling.component.scss']
})
export class AddeditbottlingComponent implements OnInit {
  bottlingForFlObj:any ={
    TypeOfLiquor:'',
    BottlingUnder:'',
    BottlingVat:'',
    BrandName:'',
    Strength:'',
    Size:''
  }
  formSubmitted = false;
  tabledata=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private apiservice : ApiService

  ) { }


  ngOnInit() {
  }
  adddata(data){
    console.log('data of page--->>',data);
    this.formSubmitted = false;
    if(data.valid == false){
      this.formSubmitted = true;
    }
    this.tabledata.push(data);
  }
  savetable(){
    this.apiservice.post('bottlingforflList',this.tabledata).then(res =>{
      console.log('res',res);     
    });
   }
  clear(data){
    data.reset();
  }
}
