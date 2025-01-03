import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PreviewService } from '@appServices/preview.service';
import { Mf5Part3Service } from '@app/services';
@Component({
  selector: 'app-viewmf5-part3',
  templateUrl: './viewmf5-part3.component.html',
  styleUrls: ['./viewmf5-part3.component.scss']
})
export class Viewmf5Part3Component implements OnInit {
  mf5part2Obj: any;
  addedit: any;
  editId: any;
  constructor(private route: ActivatedRoute, private preview: PreviewService, private router: Router, private datepipe: DatePipe, private Mf5Part3Service: Mf5Part3Service) {
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
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  setData(id?) {
    if (id) {
      this.Mf5Part3Service.getMf5Part3ById(id).subscribe((responceData: any) => {
        console.log(responceData);
        this.mf5part2Obj = responceData.data;
      })
    }
    else {
      if (this.preview.setData) {
        this.mf5part2Obj = this.preview.setData;
      }
    }
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.Mf5Part3Service.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'MF5 Part1'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }
}
