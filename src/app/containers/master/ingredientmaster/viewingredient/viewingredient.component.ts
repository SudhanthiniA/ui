import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
import { IngredientService } from '@app/services';

@Component({
  selector: 'app-viewingredient',
  templateUrl: './viewingredient.component.html',
  styleUrls: ['./viewingredient.component.scss']
})
export class ViewingredientComponent implements OnInit {

  ingredientlist: Array<any> = [];
  ingredientObj: any;
    viewId: any;
    date: any;
  constructor(private route: ActivatedRoute, private datepipe: DatePipe, private ingredientService: IngredientService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getByid(this.viewId);
      }
    });
    }
      getByid(id) {
        this.ingredientService.getIngredientById(id).subscribe((responceData: any) => {
          this.ingredientObj = responceData.data;
        });
      }
}
