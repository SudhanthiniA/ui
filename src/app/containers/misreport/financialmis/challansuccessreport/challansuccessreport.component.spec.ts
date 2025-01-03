import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallansuccessreportComponent } from './challansuccessreport.component';

describe('ChallansuccessreportComponent', () => {
  let component: ChallansuccessreportComponent;
  let fixture: ComponentFixture<ChallansuccessreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallansuccessreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallansuccessreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
