import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SugarmillapiService, PreviewService, MasterapiService,TankMaintananceService } from '@app/services';

@Component({
  selector: 'app-tankmaintainanceview',
  templateUrl: './tankmaintainanceview.component.html',
  styleUrls: ['./tankmaintainanceview.component.scss']
})
export class TankmaintainanceviewComponent implements OnInit {

  addedit: string;
  tankregobj: any = [];
  viewId: any;
  constructor(private route: ActivatedRoute,private TankmaintananceService: TankMaintananceService,
    private apiService: SugarmillapiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getTankbyid(this.viewId);
      }
    });
  }
  getTankbyid(id){

    this.TankmaintananceService.getTankById(id).subscribe((res:any)=>{
      console.log('tankbyid',res)
    })
    
  }
}
