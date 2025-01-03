import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-viewstockout',
  templateUrl: './viewstockout.component.html',
  styleUrls: ['./viewstockout.component.scss']
})
export class ViewstockoutComponent implements OnInit {


  stockoutObj: any = {

    };
    viewId: any;
    date: any;
  addedit: string;
  constructor(private route: ActivatedRoute,
              private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      } else {
        this.setData();
      }

    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
    }


      setData(id?: any) {
        if (id) {
          this.apiService.get('stockoutList/' + id).then((responceData: any) => {
            console.log(responceData);
            this.stockoutObj = responceData;
          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        } else {

          this.stockoutObj = JSON.parse(sessionStorage.getItem('formdata'));
        }
      }

}
