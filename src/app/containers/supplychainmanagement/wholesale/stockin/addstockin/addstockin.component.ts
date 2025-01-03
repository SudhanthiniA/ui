import { Component, OnInit } from '@angular/core';
import { WholeSaleIndentRequestService } from '@app/services';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addstockin',
  templateUrl: './addstockin.component.html',
  styleUrls: ['./addstockin.component.scss']
})
export class AddstockinComponent implements OnInit {

  constructor(private wholesaleindentservice: WholeSaleIndentRequestService,
              private formbuilder: FormBuilder) { }
  transportform
  ngOnInit() {
    this.transportform = this.formbuilder.group({
      passnumber:''
    })
  }

  getstockbypassid(id){
    this.wholesaleindentservice.gettransportpass(id).subscribe((resp: any) => {
      console.log(resp)
    })
  }

}
