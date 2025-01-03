import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountrymasterService } from '@app/services';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss']
})
export class ViewCountryComponent implements OnInit {

  countryObject: any = {};
  countryId: any;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountrymasterService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getCountryById(params.id);
        this.countryId = params.id;
      }
    });
  }

  getCountryById(id) {
    this.countryService.getCountryById(id)
      .subscribe((resp: any) => {
        this.countryObject = resp.data;
      });
  }

}
