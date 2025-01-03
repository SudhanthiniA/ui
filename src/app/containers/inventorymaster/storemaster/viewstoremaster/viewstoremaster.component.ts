import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService } from '@app/services';

@Component({
  selector: 'app-viewstoremaster',
  templateUrl: './viewstoremaster.component.html',
  styleUrls: ['./viewstoremaster.component.scss']
})
export class ViewstoremasterComponent implements OnInit {
  storeList: Array<any> = [];
  storeObj: any;
  viewId: any;

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    const url = apiUrls.getStoreByid + '?id=' + id;
    this.masterapiService.get(url).then((responceData: any) => {
      console.log(responceData);
      this.storeObj = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
