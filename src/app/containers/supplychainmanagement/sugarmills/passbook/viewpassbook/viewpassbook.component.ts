import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
@Component({
  selector: 'app-viewpassbook',
  templateUrl: './viewpassbook.component.html',
  styleUrls: ['./viewpassbook.component.scss']
})
export class ViewpassbookComponent implements OnInit {

  passbookObj: any = {};
  addedit: any;
  editId: any;
  tankList = [{ id: 1, name: 'Tank1' }, { id: 2, name: 'Tank2' }];
  sugarmillnamelist = [{ id: 1, name: 'Sugarmill1' }, { id: 2, name: 'Sugarmill2' }, { id: 1, name: 'Sugarmill3' },];

  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {

  }

  ngOnInit() {
    this.passbookObj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      console.log(this.passbookObj.date);
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
      this.apiService.get(`${apiUrls.getPassbookById}${id}`).then((responceData: any) => {
        console.log(responceData);
        this.passbookObj = responceData.data;
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    } else {
      this.passbookObj = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }


}
