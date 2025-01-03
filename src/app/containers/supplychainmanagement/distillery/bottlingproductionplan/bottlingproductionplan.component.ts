import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-bottlingproductionplan',
  templateUrl: './bottlingproductionplan.component.html',
  styleUrls: ['./bottlingproductionplan.component.scss']
})
export class BottlingproductionplanComponent implements OnInit {

  alldata:any=[];
  dataofarray =[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private apiservice : ApiService
  ) { }

  ngOnInit() {
    this.getdata();
  }


  getdata(){
    
    this.apiservice.get('bottlingproduction').then(res =>{
      console.log('res',res);  
      this.alldata = res  
      this.alldata.forEach((data)=>{
        console.log('dataof--->>',data);
        data.filter((list)=>{
          console.log('list---->>>',list);         
          this.dataofarray.push(list);
        })
      });
      console.log('dataofarray--->>',this.dataofarray);
      
    });
  }
}
