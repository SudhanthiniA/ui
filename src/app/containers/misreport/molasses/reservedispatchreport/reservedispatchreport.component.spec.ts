import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedispatchreportComponent } from './reservedispatchreport.component';

describe('ReservedispatchreportComponent', () => {
  let component: ReservedispatchreportComponent;
  let fixture: ComponentFixture<ReservedispatchreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedispatchreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedispatchreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
