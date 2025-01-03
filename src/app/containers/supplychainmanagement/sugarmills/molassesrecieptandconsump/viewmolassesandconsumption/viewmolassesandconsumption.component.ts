import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MolassesReceiptService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
@Component({
  selector: 'app-viewmolassesandconsumption',
  templateUrl: './viewmolassesandconsumption.component.html',
  styleUrls: ['./viewmolassesandconsumption.component.scss']
})
export class ViewmolassesandconsumptionComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  licencetypeList: Array<any> = [];
  molassisrecieptobj: any = {
  };
  date: any;
  tanklist = [];
  editId: any;
  addedithead: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private MasterapiService: MasterapiService, private router: Router, private datepipe: DatePipe, private MolassesReceiptService: MolassesReceiptService, private preview: PreviewService) {
  }

  ngOnInit() {
    this.molassisrecieptobj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
    this.addedithead = this.router.url.includes('add') == true ? 'Enter Below Details to Add Licence Type' : 'Enter Below Details to Edit Licence Type';
  }
  setData(id?: any) {
    if (id) {
      this.MolassesReceiptService.getMolassesReceiptById(id).subscribe((responceData: any) => {
        this.molassisrecieptobj = responceData.data;
      })
    } else {
      if (this.preview.setData) {
        this.molassisrecieptobj = this.preview.setData;
        if (this.preview.setData.tankId) {
          const data = `?id=${this.preview.setData.tankId}`;
          this.MasterapiService.get(`${apiUrls.getTankTypeById}${data}`).then((responceData: any) => {
            this.molassisrecieptobj.tankName = responceData.data ? responceData.data.name : null;
          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        }
      }
    }
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.MolassesReceiptService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'MolassesAdminCharges'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }
  navigateLicenceTypeList() {
    if (this.addedit === 'View') {
      this.router.navigate(['/supplychainmanagement/sugarmills/molassesrecieptandconsumption/list']);
    } else {
      this.router.navigate(['/supplychainmanagement/sugarmills/molassesrecieptandconsumption/add']);
    }
  }
}
