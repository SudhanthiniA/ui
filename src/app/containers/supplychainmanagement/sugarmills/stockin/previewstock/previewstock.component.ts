import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { StockInService, PreviewService } from '@app/services';
import { AlertService, StockInService, PreviewService, MasterapiService } from '@app/services';

@Component({
  selector: 'app-previewstock',
  templateUrl: './previewstock.component.html',
  styleUrls: ['./previewstock.component.scss']
})
export class PreviewstockComponent implements OnInit {
  name: any;
  stockFormGroup: FormGroup;
  stocinobj: any = {};
  date: any;
  editId: any;
  tankGradeList: any;
  molassestype: any;
  molasesid: any;
  tankList: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private StockInService: StockInService,
    private preview: PreviewService,
    private formBuilder: FormBuilder,
    private masterapiService: MasterapiService,


  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getAllTankGrades()
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
      else {
        this.setData();
      }
    });
  }
  buildPrescriptionFormGrp() {
    this.stockFormGroup = this.formBuilder.group({
      year: ['2019'],
      date: this.datepipe.transform(new Date(), 'dd-MM-yyyy'),
      canecrushed: [''],
      producedmolasses: [''],
      reservedmolasses: [''],
      freeleavymolasses: [''],
      bmolasses: [''],
      cmolasses: [''],
      burntmolasses: [''],
      belowmolasses: [''],
      canesyrup: [''],
      remarks: [''],
      inspectedby: [''],
      designation: [''],
      inspectedon: ['17-Sep-2020 05:23 PM'],
      stockInDetail: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }
  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      trs: data && data.trs || '',
      brix: data && data.brix || '',
      quantity: data && data.quantity || '',
      grade: data && data.grade || '',
      tank: data && data.tank || '',
      totalcapacity: data && data.totalcapacity || '',
      availableCapacity: data && data.availableCapacity || '',
      occupiedCapacity: data && data.occupiedCapacity || ''
    });
  }
  setData(id?: any) {
    if (id) {
      this.StockInService.getStockInById(id).subscribe((responceData: any) => {
        this.stocinobj = responceData.data;
      
      })
    }
    else {
      console.log(this.preview.setData)
      this.stocinobj = this.preview.setData;
      if(this.stocinobj.molassestype){
        this.masterapiService.get('molassesType/getAllMolassesType').then((res:any)=>{
        this.molassestype = res.data
        this.molasesid = this.molassestype.find((moll)=>{
          return this.stocinobj.molassestype == moll.id
        })
      })
      } 
      
      // if (this.stocinobj.molassestype) {
      //   this.StockInService.getMolassesTypeById(this.stocinobj.molassestype).subscribe((responceData: any) => {
      //     if (responceData.status === 's') {
      //       this.stocinobj.molassestype = responceData.data ? responceData.data.name : null;
      //     }
      //   });
      // }
    }
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.StockInService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'StockIn'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }

  getpreviewdata() {
    const responceData: any = JSON.parse(sessionStorage.getItem('formdata'));
    this.stocinobj = responceData
 
  }
  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
        console.log('molasses type', this.tankGradeList);
        this.tankGradeList = this.tankGradeList.find((ele) => {
          return ele.id == this.stocinobj.molassestype
        })
      }
    });
  }
  tankname(id){
    this.StockInService.getlatestfortnight().subscribe((resp: any) => {
      let responce = resp.data
      console.log(responce.productType);
      this.StockInService.gettanksbyproductid(responce.productType).subscribe((resp: any) => {
       
        this.tankList = resp.data.registeredTankByGradeList;
        console.log(this.tankList);

         
    });
    // this.tankList.find((ele:any)=>{
    //   if(id == ele.id){
    //     return ele.tankName
    //   }
    // })
  })
  }
}
