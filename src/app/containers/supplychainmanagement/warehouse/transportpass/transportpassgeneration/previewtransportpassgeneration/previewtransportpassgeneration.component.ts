import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previewtransportpassgeneration',
  templateUrl: './previewtransportpassgeneration.component.html',
  styleUrls: ['./previewtransportpassgeneration.component.scss']
})
export class PreviewtransportpassgenerationComponent implements OnInit {
  registrationobj:any;
  constructor() { }
  
  ngOnInit() {
    this.registrationobj = JSON.parse(sessionStorage.getItem('formdata'));
    console.log(this.registrationobj)
  }
}
