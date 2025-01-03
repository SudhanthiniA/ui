import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrefermentationService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  prefermntorObj: any = {};
  formSubmitted = false;
  stockindetails: any[] =[];
  otrawmetireldetails:any=[];
  addedit: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prefermntorservice: PrefermentationService,
    private datePipe: DatePipe
  ) { }



  ngOnInit() {
   
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPrefermentorById(params.id);
        this.prefermntorObj.id = params.id;

      } else {
        this.getPrefermentorById();

      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getPrefermentorById(id?) {
    if(id){
    this.prefermntorservice.getpreFermentationbyid(id).subscribe(responceData => {
      this.prefermntorObj = responceData['data'];
      this.otrawmetireldetails = responceData['data'].otRawMaterialDetailsList;
      // this.stockindetails =responceData.data.stockInDetailList;
    })

    } else {
      this.prefermntorObj = JSON.parse(sessionStorage.getItem('formdata'));

    }

  }


}
