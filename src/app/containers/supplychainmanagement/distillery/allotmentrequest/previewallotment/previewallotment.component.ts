import { Component, OnInit } from '@angular/core';
import { PreviewService} from '@app/services';

@Component({
  selector: 'app-previewallotment',
  templateUrl: './previewallotment.component.html',
  styleUrls: ['./previewallotment.component.scss']
})
export class PreviewallotmentComponent implements OnInit {

  allotmentrequestobj:any ={}

  constructor(
    private previewservice : PreviewService
  ) { }

  ngOnInit() {
    this.setData();
  }
  setData(){
    this.allotmentrequestobj = this.previewservice.setData;
    console.log(this.allotmentrequestobj);

  }

}
