import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ExpirybrandreportComponent } from './expirybrandreport.component';

describe('ExpirybrandreportComponent', () => {
  let component: ExpirybrandreportComponent;
  let fixture: ComponentFixture<ExpirybrandreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirybrandreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirybrandreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
