import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservemolassesreportComponent } from './reservemolassesreport.component';

describe('ReservemolassesreportComponent', () => {
  let component: ReservemolassesreportComponent;
  let fixture: ComponentFixture<ReservemolassesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservemolassesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservemolassesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
