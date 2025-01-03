import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, FortnightyStatementService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
@Component({
  selector: 'app-viewmf7register',
  templateUrl: './viewmf7register.component.html',
  styleUrls: ['./viewmf7register.component.scss']
})
export class Viewmf7registerComponent implements OnInit {

  editId: any;
  addedit: any;
  mf7regobj: any = {};
  constructor(private route: ActivatedRoute, private preview: PreviewService, private router: Router, private datepipe: DatePipe, private FortnightyStatementService: FortnightyStatementService,private alert: AlertService) {
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
      this.FortnightyStatementService.getFortnightyId(id).subscribe((responseData: any) => {
        if (responseData.status == 's') {
          this.mf7regobj = responseData.data;
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error')
        }
      })
    } else {
      if (this.preview.setData) {
        this.mf7regobj = this.preview.setData;
      }
    }
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.FortnightyStatementService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'MF7'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }
}
