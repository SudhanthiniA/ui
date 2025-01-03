import { Component, OnInit } from '@angular/core';
import { DistileryService } from '@app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  viewid: any;
  fermetaiondata: any = [];
  fermetationalldata: any ={};

  constructor(
    private route: ActivatedRoute,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewid = params.Id;
        this.getfermetation();
      } else {
      }
    });
  }

  getfermetation() {
    const id = '?id=' + this.viewid;

    this.distileryService.getviewdetails(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        console.log('fermetation details --->>>', responceData);
        this.fermetationalldata = responceData.data;
        this.fermetaiondata.push(responceData.data);
        console.log('view data---->>>', this.fermetaiondata);

      }
    });
  }
}
