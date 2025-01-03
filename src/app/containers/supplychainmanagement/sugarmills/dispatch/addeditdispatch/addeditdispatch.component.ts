import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
@Component({
  selector: 'app-addeditdispatch',
  templateUrl: './addeditdispatch.component.html',
  styleUrls: ['./addeditdispatch.component.scss']
})
export class AddeditdispatchComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;

  dispatchObj: any = {
    stock: '',
    distillery: '',
    orderid: '',
    quantity: '',
    location: '',
    vehicaltype: ''
  };
  date: any;
  orderrequestList: any = [];
  vehicaltypelist = [{ id: 1, name: 'van' }, { id: 2, name: 'Truck' }, { id: 3, name: 'Train' }, { id: 2, name: 'Flight' }, { id: 5, name: 'Ship' }];
  locationlist = [{ id: 1, name: 'Lucknow' }, { id: 2, name: 'Patna' }];
  gradeList = [{ id: 1, name: 'C-Heavy' }, { id: 2, name: 'B-Heavy' }];
  sugarmillslist = [{ name: 'sugarmill1' }, { name: 'sugarmill2' }, { name: 'sugarmill3' }];
  tanklist = [{ name: 'Tank1' }, { name: 'Tank2' }, { name: 'Tank3' }];
  messurementlist = [{ id: 1, name: 'ltr' }, { id: 2, name: 'mltr' }];
  totalTankList = [{ id: 1, name: 'Tank 1' }, { id: 2, name: 'Tank 2' }, { id: 3, name: 'Tank 3' }];

  editId: any;
  formSubmitted = false;
  stockFormGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService,
    private formBuilder: FormBuilder
  ) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        // this.setData(this.editId);
      }
    });
    this.getorderrequest();
    this.dispatchObj.net = this.dispatchObj.gross - this.dispatchObj.tare;
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  buildPrescriptionFormGrp() {
    this.stockFormGroup = this.formBuilder.group({
      mfdate: this.datepipe.transform(new Date(), 'dd-MM-yyyy'),
      transportpassno: [''],
      sugarmillname: [''],
      address: [''],
      session: [''],
      supplytype: [''],
      stockindetails: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      trs: data && data.trs || '',
      bricks: data && data.bricks || '',
      quantity: data && data.quantity || '',
      grade: data && data.grade || '',
      tank: data && data.tank || '',
      totalcapacity: data && data.totalcapacity || '',
      availablecapacity: data && data.availablecapacity || '',
      occupiedcapacity: data && data.occupiedcapacity || ''
    });
  }

  public addEmptyCtrl(): void {
    (this.stockFormGroup.get('stockindetails') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.stockFormGroup.get('stockindetails') as FormArray).length;
  }

  addNewRow(rowId) {
    this.addEmptyCtrl();
  }

  public removeSelectedRow(idx: number) {
    (this.stockFormGroup.get('stockindetails') as FormArray).removeAt(idx);
  }

  onKey(tare) {

    this.dispatchObj.net = this.dispatchObj.gross - tare;

  }

  getorderrequest() {
    this.apiService.get('orderrequest/').then((resp: any[]) => {
      console.log(resp);
      this.orderrequestList = resp;
      const data = this.orderrequestList.filter((ele) => {
        return ele.id == this.editId;

      });
      this.dispatchObj = data[0];


    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  // setData(id) {
  //   this.apiService.get('dispatchlist/' + id).then(responceData => {
  //     console.log(responceData);
  //     this.dispatchObj = responceData;
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }


  // getorder(Zerosearch) {
  //   // alert('hi')
  //   const Searchvalue = Zerosearch;
  //   const value = Searchvalue.length;
  //   if (value >= 4 ) {
  //    var orderrequestobj = this.orderrequestList.filter((item) =>{
  //       return item.orderid == Searchvalue
  //     })
  //     this.dispatchObj.stock = orderrequestobj[0].stock;
  //     this.dispatchObj.quantity = orderrequestobj[0].quantity;

  //   }else{

  //   }
  // }

  Adddispatchlist(dispatchForm) {


      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {

          mfdate: this.dispatchObj.mfdate,
          transportpassno: this.dispatchObj.transportpassno,
          sugarmillname: this.dispatchObj.sugarmillname,
          address: this.dispatchObj.address,

          orderid: this.dispatchObj.orderid,
          orderdate: this.dispatchObj.orderdate,
          stock: this.dispatchObj.stock,
          distillery: this.dispatchObj.distelleryname,
          quantity: this.dispatchObj.quantity,

          vehicaltype: this.dispatchObj.vehicaltype,
          vehicalno: this.dispatchObj.vehicalno,
          drivername: this.dispatchObj.drivername,
          vehiclequantity: this.dispatchObj.vehiclequantity,
          location: this.dispatchObj.location,
          route: this.dispatchObj.route,

          tank: this.dispatchObj.tank,
          gross: this.dispatchObj.gross,
          tare: this.dispatchObj.tare,
          net: this.dispatchObj.net,
          trs: this.dispatchObj.trs,
          brix: this.dispatchObj.brix,
          grade: this.dispatchObj.grade,
          beforeloadingofmolasses: this.dispatchObj.beforeloadingofmolasses,
          afterloadingofmolases: this.dispatchObj.afterloadingofmolases,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.dispatchObj.status
        };

        console.log(postParam);
        const url = 'transportgenerationlist/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/transportgeneration/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          mfdate: this.dispatchObj.mfdate,
          transportpassno: this.dispatchObj.transportpassno,
          sugarmillname: this.dispatchObj.sugarmillname,
          address: this.dispatchObj.address,

          orderid: this.dispatchObj.orderid,
          orderdate: this.dispatchObj.orderdate,
          stock: this.dispatchObj.stock,
          distillery: this.dispatchObj.distelleryname,
          quantity: this.dispatchObj.quantity,

          vehicaltype: this.dispatchObj.vehicaltype,
          vehicalno: this.dispatchObj.vehicalno,
          drivername: this.dispatchObj.drivername,
          vehiclequantity: this.dispatchObj.vehiclequantity,
          location: this.dispatchObj.location,
          route: this.dispatchObj.route,

          tank: this.dispatchObj.tank,
          gross: this.dispatchObj.gross,
          tare: this.dispatchObj.tare,
          net: this.dispatchObj.net,
          trs: this.dispatchObj.trs,
          brix: this.dispatchObj.brix,
          grade: this.dispatchObj.grade,
          beforeloadingofmolasses: this.dispatchObj.beforeloadingofmolasses,
          afterloadingofmolases: this.dispatchObj.afterloadingofmolases,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.dispatchObj.status
        };

        console.log(postParam);

        this.apiService.post('transportgenerationlist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/transportgeneration/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }

  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/list']);
  }


}
