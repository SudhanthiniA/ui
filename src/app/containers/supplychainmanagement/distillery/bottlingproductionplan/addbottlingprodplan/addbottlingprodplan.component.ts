import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
import { LiquorTypeService,LicenseTypeService,LicenseeService,PackageTypeService,BrandMasterService} from '@app/services';




@Component({
  selector: 'app-addbottlingprodplan',
  templateUrl: './addbottlingprodplan.component.html',
  styleUrls: ['./addbottlingprodplan.component.scss']
})
export class AddbottlingprodplanComponent implements OnInit {

  bottlingprodplan:any={
    botteldate:'',
    mappunmap:'',
    liquortype:'',
    licencetype:'',
    licenceno:'',
    palnid:'',
    brand:'',
    size:'',
    noofcases:'',
    quantitybl:'',
    packagetype:'',
    noofbottlepercase:'',
    plannednoofbottles:'',
  }
  productobj:any ={
    palnid:'',
    brand:'',
    size:'',
    noofcases:'',
    quantitybl:'',
    packagetype:'',
    noofbottlepercase:'',
    plannednoofbottles:''

  }
  indentRequestObject: any = {
    
    botteldate:'',
    mappunmap:'',
    liquortype:'',
    licencetype:'',
    licenceno:'',
    palnid:'',
    brand:'',
    size:'',
    noofcases:'',
    quantitybl:'',
    packagetype:'',
    noofbottlepercase:'',
    plannednoofbottles:'',

};
  formSubmitted = false;
  tabledata=[];
  rawmaterialList:any=[];
  licenceTypeList:any=[];
  licenseeData:any=[];
  packagetypeData:any=[];
  brandlists:any=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private apiservice : ApiService,
    private liquorTypeService: LiquorTypeService,
    private licensetypeService: LicenseTypeService,
    private licenseeService: LicenseeService,
    private packageService: PackageTypeService,
    private brandService: BrandMasterService

  ) { }

  ngOnInit() {
    this.getliquertype();
    this.getlicencetype();
    this.getLicensee();
    this.getPackagetype();
    this.getBrandMaster();
  }

  getliquertype(){
    this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
      console.log(responceData);
      this.rawmaterialList = responceData.data;
    });
  }
  getlicencetype(){
    this.licensetypeService.getLicenseType().subscribe((responceData: any) => {
      console.log(responceData);
      this.licenceTypeList = responceData.data;
    });
  }
  getLicensee() {
    this.licenseeService.getLicensee().subscribe((responceData: any) => {
      this.licenseeData = responceData.data;
    });
  }
  getPackagetype() {
    this.packageService.allPackageTypes().subscribe((responceData: any) => {
      this.packagetypeData = responceData.data;
    });
  }
  getBrandMaster() {
    this.brandService.getBrandMaster()
      .subscribe((resp: any) => {
        this.brandlists = resp.data;
      });
  }
  adddata(data){
    console.log('data of page--->>',data.value);
    // console.log('object of data -->>',this.bottlingprodplan);
    
    this.formSubmitted = false;
    if(data.valid == false){
      this.formSubmitted = true;
    }
    console.log(this.bottlingprodplan);
   this.tabledata.push(data.value)
  }
 bindelements(i,data){
   console.log('index--->>',i);
   console.log('data of rowdata ==>>',data);
  
   this.bottlingprodplan.botteldate=data[i].botteldate,
   this.bottlingprodplan.mappunmap=data[i].mappunmap,
   this.bottlingprodplan.liquortype=data[i].liquortype,
   this.bottlingprodplan.licencetype=data[i].licencetype,
   this.bottlingprodplan.licenceno=data[i].licenceno,
   this.bottlingprodplan.palnid=data[i].palnid,
   this.bottlingprodplan.brand=data[i].brand,
   this.bottlingprodplan.size=data[i].size,
   this.bottlingprodplan.noofcases=data[i].noofcases,
   this.bottlingprodplan.quantitybl=data[i].quantitybl,
   this.bottlingprodplan.packagetype=data[i].packagetype,
   this.bottlingprodplan.noofbottlepercase=data[i].noofbottlepercase,
   this.bottlingprodplan.plannednoofbottles=data[i].plannednoofbottles
   
 }
  savetable(){
    let payload =[];
    payload.push(this.bottlingprodplan);
    console.log('payload',payload);
  //  this.apiservice.post('bottlingproduction',this.tabledata).then(res =>{
  //    console.log('res',res);     
  //  });
  }
  // clears(){
  //   this.indentRequestObject.botteldate='',
  //   this.indentRequestObject.mappunmap='',
  //   this.indentRequestObject.liquortype='',
  //   this.indentRequestObject.licencetype='',
  //   this.indentRequestObject.licenceno='',
  //   this.indentRequestObject.palnid='',
  //   this.indentRequestObject.brand='',
  //   this.indentRequestObject.size='',
  //   this.indentRequestObject.noofcases='',
  //   this.indentRequestObject.quantitybl='',
  //   this.indentRequestObject.packagetype='',
  //   this.indentRequestObject.noofbottlepercase=''
  //   this.indentRequestObject.plannednoofbottles=''
  // }
    clears(data){
      data.reset();
    }
  saveData(data){
    console.log('data of value--->>',data);
    console.log('object in ts--->>>',this.indentRequestObject);
    let payload = this.indentRequestObject
    this.tabledata.push(payload);
    console.log('allbottling data-->>',this.tabledata);
  }

}
