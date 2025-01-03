import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtransferreportComponent } from './retailtransferreport.component';

describe('RetailtransferreportComponent', () => {
  let component: RetailtransferreportComponent;
  let fixture: ComponentFixture<RetailtransferreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtransferreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtransferreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
