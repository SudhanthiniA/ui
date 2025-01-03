import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatemasterService, CountrymasterService } from '@app/services';

@Component({
  selector: 'app-view-state',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.scss']
})
export class ViewStateComponent implements OnInit {

  countryData: any;
  stateObject: any = {};

  constructor(
    private route: ActivatedRoute,
    private stateService: StatemasterService,
    private countryService: CountrymasterService
  ) { }

  ngOnInit() {
    this.getCountry();
    this.stateObject.status = true;
    this.stateObject.country = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getStateById(params.id);
        this.stateObject.id = params.id;
      }
    });
  }

  getCountry() {
    this.countryService.getCountry()
      .subscribe((resp: any) => {
        this.countryData = resp.data;
      });
  }

  getStateById(id) {
    this.stateService.getStateById(id)
      .subscribe((resp: any) => {
        this.stateObject = resp.data;
      });
  }

}
