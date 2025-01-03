import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockavailabilityCommonComponent } from './stockavailability-common.component';

describe('StockavailabilityCommonComponent', () => {
  let component: StockavailabilityCommonComponent;
  let fixture: ComponentFixture<StockavailabilityCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockavailabilityCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockavailabilityCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
