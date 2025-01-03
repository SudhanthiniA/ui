import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { Mf9Service ,PreviewService} from '@app/services';

@Component({
  selector: 'app-previewmf9',
  templateUrl: './previewmf9.component.html',
  styleUrls: ['./previewmf9.component.scss']
})
export class Previewmf9Component implements OnInit {
  mf9FormGroup: FormGroup;
  molasismode;
  previewdata: any;
  sugarMillName = "Triveni Engineering & Industries Ltd";
  sugarMillAddress = "Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925";
  generalManager = 'Ashish';
  constructor(
    private router: Router,
    private previews: PreviewService,
    private Mf9Service: Mf9Service,
    private formBuilder: FormBuilder
  ) {
  }
  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.setdata();
  }

  buildPrescriptionFormGrp() {
    this.mf9FormGroup = this.formBuilder.group({
      sugarmillname: '',
      sugarmilladdress: '',
      generalmanager: '',
      lastyear: '',
      thisyear: '',
      lastyearstartdate: '',
      lastyearenddate: '',
      thisyearstartdate: '',
      thisyearenddate: '',
      lastyeardays: '',
      thisyeardays: '',
      lastyearcanesupply: '',
      thisyearcanesupply: '',
      lastyearmolassesqtls: '',
      thisyearmolassesqtls: '',
      lastyearpermolassescane: '',
      thisyearpermolassescane: '',
      frombroadgauge: '',
      frommetergauge: '',
      tochemical:'',
      suppliestoother: '',
      closingbalance: '',
      molassesloadingmode: '',
      wastage: '',
      stockindetails: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  setdata() {
    this.previewdata = this.previews.setData;;
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
