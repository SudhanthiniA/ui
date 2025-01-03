import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licencecategories',
  templateUrl: './licencecategories.component.html',
  styleUrls: ['./licencecategories.component.scss']
})
export class LicencecategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('formdata')

  }

}
