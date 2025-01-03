import { Component, OnInit } from '@angular/core';
import {  SheeraNidhiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PreviewService } from '@appServices/preview.service';
@Component({
  selector: 'app-editregester',
  templateUrl: './editregester.component.html',
  styleUrls: ['./editregester.component.scss']
})
export class EditregesterComponent implements OnInit {
  tankreqObj: any = {
    date: '',
    dispatchGradeAHeavyQtls: '',
    dispatchGradeBHeavyQtls: '',
    dispatchGradeCHeavyQtls: '',
    totalDispatchMolassesQtls: '',
    rateGradeAHeavyQtls: '',
    rateGradeBHeavyQtls: '',
    rateGradeCHeavyQtls: '',
    dueGradeAHeavyQtls: '',
    dueGradeBHeavyQtls: '',
    dueGradeCHeavyQtls: '',
    totaldue: '',
    progressiveDepositsOnDate: '',
    totalProgressiveDeposits: '',
    accountNumber: '',
    totalamount: '',
    balanceInAccount: '',
    releaseEcOrder: '',
    withdrawl: '',
    remarks: '',
    status: ''
  };
  isModified: any;
  addedit: any;
  editId: any;
  constructor(private route: ActivatedRoute, private preview: PreviewService, private router: Router, private datepipe: DatePipe,  private SheeraNidhiService: SheeraNidhiService,) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }
  setData(id?) {
    if (id) {
      this.SheeraNidhiService.getMolassesRegisterById(id).subscribe((responceData: any) => {
        this.tankreqObj = responceData.data;
      })
    } else {
      if (this.preview.setData) {
        this.tankreqObj = this.preview.setData;
      }
    }
  }
  getPrint() {
    let  url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.SheeraNidhiService.getPrintData(url).subscribe((responceData: any) => {
       const newBlob = new Blob([responceData], { type: 'application/pdf' });
       if (window.navigator && window.navigator.msSaveOrOpenBlob) {
         window.navigator.msSaveOrOpenBlob(newBlob);
         return;
       }
       const data = window.URL.createObjectURL(newBlob);
       const link = document.createElement('a');
       link.href = data;
       link.download = 'SheeraNidhiRegister'
       link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
       return true; 
     })
   }
 
}
