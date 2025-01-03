import { Component, OnInit } from '@angular/core';
import { WineDistruibutionService } from '@app/services/retails/wineDistribution.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewwinedistribution',
  templateUrl: './viewwinedistribution.component.html',
  styleUrls: ['./viewwinedistribution.component.scss']
})
export class ViewwinedistributionComponent implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: WineDistruibutionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getWineDistributionId(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}