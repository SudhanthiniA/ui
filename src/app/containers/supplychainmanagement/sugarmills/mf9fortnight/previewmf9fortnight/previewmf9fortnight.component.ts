import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Mf9Service,PreviewService } from '@app/services';
@Component({
  selector: 'app-previewmf9fortnight',
  templateUrl: './previewmf9fortnight.component.html',
  styleUrls: ['./previewmf9fortnight.component.scss']
})
export class Previewmf9fortnightComponent implements OnInit {
  mf9FormGroup: FormGroup;
  molasismode;
  previewdata: any;
  constructor(
    private router: Router,
    private Mf9Service: Mf9Service,
    private previews: PreviewService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.setdata();
  }

  buildPrescriptionFormGrp() {
    this.mf9FormGroup = this.formBuilder.group({
      sugarmillname: 'Triveni Engineering & Industries Ltd',
      sugarmilladdress: 'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925',
      generalmanager: 'Mr.Bhupender Singh',
      lastyear: '2019-2020,',
      thisyear: '2020-2021',
      lastyearstartdate: '09-11-2019',
      lastyearenddate: '28-04-2020',
      thisyearstartdate: '',
      thisyearenddate: '',
      lastyeardays: '172',
      thisyeardays: '',
      lastyearcanesupply: '8119639.14',
      thisyearcanesupply: '',
      lastyearmolassesqtls: '481604.50',
      thisyearmolassesqtls: '',
      lastyearpermolassescane: '5.93%',
      thisyearpermolassescane: '',
      frombroadgauge: '',
      frommetergauge: '',
      tochemical: 481604.20,
      suppliestoother: 0,
      closingbalance: 0,
      // mechanical: '',
      // manual: '',
      molassesloadingmode: '',
      wastage: 0,
      stockindetails: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  setdata() {
    this.previewdata = this.previews.setData;;
    console.log('preview===>', this.previewdata);
    
  }
  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      tankType: data && data.tankType || '',
      coveredNoOfTank: data && data.coveredNoOfTank || '',
      coveredCapacity: data && data.coveredCapacity || '',
      uncoveredNoOfTank: data && data.uncoveredNoOfTank || '',
      uncoveredCapacity: data && data.uncoveredCapacity || '',
    });
  }
  public getPresFormLength(): number {
    return (this.mf9FormGroup.get('stockindetails') as FormArray).length;
  }
  getPrint() {
    let  url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.Mf9Service.getPrintData(url).subscribe((responceData: any) => {
       const newBlob = new Blob([responceData], { type: 'application/pdf' });
       if (window.navigator && window.navigator.msSaveOrOpenBlob) {
         window.navigator.msSaveOrOpenBlob(newBlob);
         return;
       }
       const data = window.URL.createObjectURL(newBlob);
       const link = document.createElement('a');
       link.href = data;
       link.download = 'MF9'
       link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
       return true;
     })
   }
}
