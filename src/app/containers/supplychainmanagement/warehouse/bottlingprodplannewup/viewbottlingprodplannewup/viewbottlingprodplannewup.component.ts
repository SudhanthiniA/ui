import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-viewbottlingprodplannewup',
  templateUrl: './viewbottlingprodplannewup.component.html',
  styleUrls: ['./viewbottlingprodplannewup.component.scss']
})
export class ViewbottlingprodplannewupComponent implements OnInit {

  @ViewChild('modifyModal', { static: false }) modifyModal;
  @ViewChild('cancelModal', { static: false }) cancelModal;
  

  constructor() { }

  ngOnInit() {
  }
  modifyRequest() {
    this.modifyModal.show()
  }
  cancelRequest() {
    this.cancelModal.show()
  }
  cancelRequestHide() {
    this.cancelModal.hide()
  }
}
