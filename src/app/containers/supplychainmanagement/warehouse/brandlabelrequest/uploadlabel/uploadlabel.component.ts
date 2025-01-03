import { Component, OnInit } from '@angular/core';
import { LabelregestrationService } from '@app/services/ware-house';

@Component({
  selector: 'app-uploadlabel',
  templateUrl: './uploadlabel.component.html',
  styleUrls: ['./uploadlabel.component.scss']
})
export class UploadlabelComponent implements OnInit {
  alllabelreq: any;

  constructor(  private labelregestrationservice : LabelregestrationService) { }

  ngOnInit() {
    this.getalllabelreq();
  }

  getalllabelreq(){
    this.labelregestrationservice.getalllabelrequest().subscribe((resp: any) => {
      if(resp.status == 's') {
        this.alllabelreq = resp.data;
      }
    })
  }
}
