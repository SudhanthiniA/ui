import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
import { LiquorCategoryService } from '@app/services';

@Component({
  selector: 'app-viewliquor',
  templateUrl: './viewliquor.component.html',
  styleUrls: ['./viewliquor.component.scss']
})
export class ViewliquorComponent implements OnInit {

  liquorList: Array<any> = [];
  liquorObj: any;
    viewId: any;
    date: any;
  constructor(private route: ActivatedRoute, private datepipe: DatePipe, private liquorService: LiquorCategoryService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
    }

      setData(id) {
        this.liquorService.getLiquorById(id).subscribe((responceData: any) => {
          console.log(responceData);
          this.liquorObj = responceData.data;
        });
      }

}
