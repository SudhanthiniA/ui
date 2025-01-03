import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-viewdamageproducts',
  templateUrl: './viewdamageproducts.component.html',
  styleUrls: ['./viewdamageproducts.component.scss']
})
export class ViewdamageproductsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/supplychainmanagement/wholesale/damageproducts/list'])
  }
}
