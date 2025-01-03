import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MolassesAdminService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
@Component({
  selector: 'app-viewmolassesadministrationcharges',
  templateUrl: './viewmolassesadministrationcharges.component.html',
  styleUrls: ['./viewmolassesadministrationcharges.component.scss']
})
export class ViewmolassesadministrationchargesComponent implements OnInit {
  addedit: string;
  constructor(private route: ActivatedRoute, private datepipe: DatePipe,
    private router: Router, private preview: PreviewService, private MolassesAdminService: MolassesAdminService) { }
  viewId;
  molassesadministrationchargesObj: any = {

  };
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  setData(id?: any) {
    if (id) {
      this.MolassesAdminService.getMolassesAdminById(id).subscribe((responceData: any) => {
        this.molassesadministrationchargesObj = responceData.data;
      })
    } else {
      if (this.preview.setData) {
        this.molassesadministrationchargesObj = this.preview.setData;
        this.molassesadministrationchargesObj.consumedDay = this.molassesadministrationchargesObj.day;
        this.molassesadministrationchargesObj.consumedToDate = this.molassesadministrationchargesObj.day;
      }
    }
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.MolassesAdminService.getPrintData(url).subscribe((responceData: any) => {
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

}
