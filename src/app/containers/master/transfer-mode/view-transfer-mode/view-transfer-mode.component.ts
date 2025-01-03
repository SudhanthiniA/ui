import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ModeOfTransferService } from '@app/services';

@Component({
  selector: 'app-view-transfer-mode',
  templateUrl: './view-transfer-mode.component.html',
  styleUrls: ['./view-transfer-mode.component.scss']
})
export class ViewTransferModeComponent implements OnInit {

  transfermodeObject: any = {};
  licencetypeData: any;
  licencenameData: any;
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transferService: ModeOfTransferService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.transfermodeObject.status = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getProductTypeById(params.id);
        this.transfermodeObject.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  getProductTypeById(id) {
    this.transferService.getTransferById(id).subscribe((responceData: any) => {
      this.transfermodeObject = responceData.data;
      if (responceData.data.active) {
        this.transfermodeObject.status = 'Active';

      } else {
        this.transfermodeObject.status = 'InActive';

      }
    });
  }

}
