import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, ApiService, WarehouseNewbrandService } from '@app/services';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';

@Component({
  selector: 'app-add-importpermit',
  templateUrl: './add-importpermit.component.html',
  styleUrls: ['./add-importpermit.component.scss']
})
export class AddImportpermitComponent implements OnInit {
  ImportPermitObj:any={}
  formSubmitted = false;
  importpasspermits: FormGroup;
  editId: any;
  date: any;
  curDate = new Date();
  barcode: string;
  transport:string;
  addedit: any;
  editdata: any;
  permit: any;
  warehouse: any;
  sizelist: any;
  allbrands: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private importpasspermit: importpasspermitService,
    private alert: AlertService,
    private apiservice:ApiService,
    private formbuilder: FormBuilder,
    private warehouseNewbrandService: WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    this.getcontrols()
  }

  getcontrols() {
    this.importpasspermit.getunitdeatails()
    .subscribe((resp: any) => {
      this.permit = resp;
      
    })

    this.importpasspermit.getwarehouse()
    .subscribe((resp: any) => {
      this.warehouse = resp;
      this.importpasspermits.get('BrandWareHouseName').setValue(this.warehouse.bondWarehouseName)
    })

    this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      console.log(responceData);
      this.sizelist = responceData.data;
    });

    this.warehouseNewbrandService.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    })
  }

  buildPrescriptionFormGrp() {
    this.importpasspermits = this.formbuilder.group({
      "BrandWareHouseName":['bond warehouse', Validators.required],
      "District":['Hyderabad', Validators.required],
      "LicenseNo":['Mf2', Validators.required],
      "ParentUnitName":['Parent Warehouse', Validators.required],
      "ParentUnitState":['Telanagana', Validators.required],
      "PlotNo":['123', Validators.required],
      "StreetName":['street no 1', Validators.required],
      "Area":['Sanga reddy', Validators.required],
      "City":['Hyderabad', Validators.required],
      "Pincode":['500001', Validators.required],
      "District1":['Hyderabad', Validators.required],
      "State":['Telanagana', Validators.required],
      "TotalAdvFee":['', Validators.required],
      "TotalAdvSpecialFee":['', Validators.required],
      "TotalDuty":['', Validators.required],
      "TotalImportFee":['', Validators.required],
      "TotalSpecialFee":['', Validators.required],
      "RouteNo":['', Validators.required],
      // "customRadioInline1":['', Validators.required],
      "barcode":['', Validators.required],
      "transport":['', Validators.required],
      "importpasspermitsGenDetailList": this.formbuilder.array([
        this.buildformgroup()
      ])
      // "status": status,
      // stockInDetail: this.formBuilder.array([
      //   this.addFormGroupTable()
      // ])
    });
    console.log(this.importpasspermit);
    
  }
  setData(id) {
    this.importpasspermit.getImportsbyId(id).subscribe(responceData => {
      // if (response.status == 's') {
        // console.log('getbyid', response);
        this.editdata = responceData
        this.importpasspermits.patchValue({
          BrandWareHouseName: this.editdata.BrandWareHouseName,
          District: this.editdata.District,
          LicenseNo: this.editdata.LicenseNo,
          ParentUnitName:this.editdata.ParentUnitName,
          ParentUnitState: this.editdata.ParentUnitState,
          PlotNo: this.editdata.PlotNo,
          StreetName:this.editdata.StreetName ,
          Area: this.editdata.Area,
          City: this.editdata.City,
          Pincode: this.editdata.Pincode,
          District1: this.editdata.District1,
          State: this.editdata.State,
          TotalAdvFee: this.editdata.TotalAdvFee,
          TotalAdvSpecialFee: this.editdata.TotalAdvSpecialFee,
          TotalDuty: this.editdata.TotalDuty,
          TotalImportFee: this.editdata.TotalImportFee,
          TotalSpecialFee: this.editdata.TotalSpecialFee,
          RouteNo: this.editdata.RouteNo,
          barcode: this.editdata.barcode,
          transport: this.editdata.transport,
        })
        // this.importpasspermits.importpasspermitsGenDetailList.forEach((element: any, idx: number) => {
        //   if (element) {
        //     (this.importpasspermits.get('importpasspermitsGenDetailList') as FormArray).removeAt(idx);
        //     (this.importpasspermits.get('importpasspermitsGenDetailList') as FormArray).push(this.buildformgroup(element));
        //     this.addEmptyCtrl();
        //   }
        // }); 
    })
  }
  public addEmptyCtrl(): void {
    (this.importpasspermits.get('requestBrandDetlist') as FormArray).push(this.buildformgroup());
  }
  buildformgroup(data?: any){

    return this.formbuilder.group({
      packtype:'',
      noofbottles:'',
      plannednoofbottles:'',
      specialfee:'',
      importfee:'',
      totduty:'',
      totduty1:'',
      quantity:'',
      etin:'',
      noofcases:'',
      size:''
    });
  }
  addimportpermit(form, status) {
   
    let forms = this.importpasspermits.value;
   
    let importarray =  forms.importpasspermitsGenDetailList.map(element => {
       return {
        "brandId": element.packtype,
        // "brandName": element.packtype,
        "entityId": 7,
        "etin": element.etin,
        // "id": 0,
        "importFee": element.TotalImportFee,
        "isactive": true,
        "noofBottlePerCases": element.noofbottles,
        "noofCases": element.noofcases,
        "plannedBottlePerCases": element.plannednoofbottles,
        "quantity": element.quantity,
        "size": element.size,
        "sizeId": element.size,
        "specialFee": element.specialfee,
        "status": status,
        "totalDuty": element.totduty1
       }
    });
    let postingobj = {
      "entityId": 7,
      // "id": 0,
      "isactive": true,
      "parentUnitName": forms.ParentUnitName,
      "parentUnitState": forms.ParentUnitState,
      "requestimpPermitDetlist": importarray,
      "status": status,
      "warehouseName":forms.BrandWareHouseName
    }
console.log(postingobj);

    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {       
        this.importpasspermit.updateImportById(this.editId,postingobj).subscribe((response: any) => {
          // if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/importpermit/list']);
          // }
          // else {
          //   this.alert.showError(response['userDisplayMesg'], 'error')
          // }
        })
      } else {
        this.importpasspermit.addImports(postingobj).subscribe((response: any) => {
          //JSON Integration
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/importpermit/list']);

          // if (response.status == "s") {
          //   this.alert.showSuccess(response.userDisplayMesg, 'Success');
          //   this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/list']);
          // }
          // else {
          //   this.alert.showError(response['userDisplayMesg'], 'error')
          // }
        })
      }
    }
  }
  addrow() {
    (this.importpasspermits.get('importpasspermitsGenDetailList') as FormArray).push(this.buildformgroup());
    console.log(this.importpasspermits.get('importpasspermitsGenDetailList') );
    
   }
   barcodeevent(event,value){
     console.log(value);
     
    if (value == 'Mapped') {
      this.barcode = 'Mapped';
    } else {
      this.barcode = 'Un Mapped';
    }
  }
  transportevent(event,value){
    console.log(value);
   
    if (value == 'Train') {
      this.transport = 'Train';
    } else {
      this.transport = 'by Road';
  }
}

calspecialfee() {
  let sum = 0;
  (this.importpasspermits.get('importpasspermitsGenDetailList') as FormArray).controls.forEach(element => {
     sum = sum + (parseInt(element.value.specialfee))
  });
  this.importpasspermits.get('TotalSpecialFee').setValue(sum)
}

calimportfee() {
  let sum = 0;
  (this.importpasspermits.get('importpasspermitsGenDetailList') as FormArray).controls.forEach(element => {
     sum = sum + (parseInt(element.value.importfee))
  });
  this.importpasspermits.get('TotalImportFee').setValue(sum)
}

caldutyfee() {
  let sum = 0;
  (this.importpasspermits.get('importpasspermitsGenDetailList') as FormArray).controls.forEach(element => {
     sum = sum + (parseInt(element.value.totduty1))
  });
  this.importpasspermits.get('TotalDuty').setValue(sum)
}

calplannedbottles(form) {
let sum = 0
if(form.get('noofcases').value && form.get('noofbottles').value ) {
  sum = form.get('noofcases').value * form.get('noofbottles').value
}
form.get('plannednoofbottles').setValue(sum)
}

deleterow(i) {
(this.importpasspermits.get('importpasspermitsGenDetailList') as FormArray).removeAt(i);
this.calspecialfee();
this.calimportfee();
this.caldutyfee();

}

}


