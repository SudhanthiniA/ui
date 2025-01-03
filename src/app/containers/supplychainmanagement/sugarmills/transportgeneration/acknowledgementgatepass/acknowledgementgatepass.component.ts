import { Component, OnInit } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { SugarmillapiService } from '@app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acknowledgementgatepass',
  templateUrl: './acknowledgementgatepass.component.html',
  styleUrls: ['./acknowledgementgatepass.component.scss']
})

export class AcknowledgementgatepassComponent implements OnInit {
  editId: any;
  ackData: any;

  constructor(
    private apiService: SugarmillapiService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    const data = `?id=${id}`;
    this.apiService.get(`${apiUrls.transportGenGetById}${data}`).then((responceData: any) => {
     this.ackData = responceData.data; 
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
