import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-viewbottlingproductionplan',
  templateUrl: './viewbottlingproductionplan.component.html',
  styleUrls: ['./viewbottlingproductionplan.component.scss']
})
export class ViewbottlingproductionplanComponent implements OnInit {

  @ViewChild('modifyModal', { static: false }) modifyModal;
  

  constructor() { }

  ngOnInit() {
  }
  modifyRequest() {
    this.modifyModal.show()
  }

}
