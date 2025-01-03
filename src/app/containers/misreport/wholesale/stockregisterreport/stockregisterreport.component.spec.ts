import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockregisterreportComponent } from './stockregisterreport.component';

describe('StockregisterreportComponent', () => {
  let component: StockregisterreportComponent;
  let fixture: ComponentFixture<StockregisterreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockregisterreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockregisterreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
