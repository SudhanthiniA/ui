import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SpiritService } from '@app/services';
@Component({
  selector: 'app-view-spirit',
  templateUrl: './view-spirit.component.html',
  styleUrls: ['./view-spirit.component.scss']
})
export class ViewSpiritComponent implements OnInit {

  spirittypeObj: any = {};
  licencetypeData: any;
  licencenameData: any;
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spiritService: SpiritService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.spirittypeObj.status = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getSpiriteById(params.id);
        this.spirittypeObj.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  getSpiriteById(id) {
    this.spiritService.getSpiritById(id).subscribe((responceData: any) => {
      this.spirittypeObj = responceData.data;
    });
  }

}
