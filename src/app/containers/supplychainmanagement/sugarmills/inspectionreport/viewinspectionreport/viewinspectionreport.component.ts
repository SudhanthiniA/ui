import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviewService, MasterapiService, InspectionReportService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-viewinspectionreport',
  templateUrl: './viewinspectionreport.component.html',
  styleUrls: ['./viewinspectionreport.component.scss']
})
export class ViewinspectionreportComponent implements OnInit {
  addedit: string;
  inspectionData: any;
  editId: any;

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private preview: PreviewService,
    private router: Router,
    private inspectionReportService: InspectionReportService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  setData(id?) {
    if (id) {
      this.inspectionReportService.getInspectionReportId(id).subscribe((responceData: any) => {
        this.inspectionData = responceData.data;
      });
    } else {
      if (this.preview.setData) {
        this.inspectionData = this.preview.setData;
        // if (this.preview.setData.steelTankNumberId) {
        //   const data = this.preview.setData.steelTankNumberId;
        //   this.masterapiService.get(`${apiUrls.getTankTypeById}${data}`).then((responceData: any) => {
        //     this.inspectionData.tankName = responceData.data ? responceData.data.name : null;
        //   }).catch((err: any) => {
        //     console.log('\n err...', err);
        //   });
        // }
        if (this.preview.setData.verificationTypeId) {
          // const data = `?id=${this.preview.setData.verificationTypeId}`;
          const data = this.preview.setData.verificationTypeId;
          this.masterapiService.get(`${apiUrls.getverificationbyId}${data}`).then((responceData: any) => {
            this.inspectionData.verificationTypeName = responceData.data ? responceData.data.name : null;
          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        }
      }
    }
  }
  getPrint() {
    const url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.inspectionReportService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'InspectionReport';
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    });
  }
}
