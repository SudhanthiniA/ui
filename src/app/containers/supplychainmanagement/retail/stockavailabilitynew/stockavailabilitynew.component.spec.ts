import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockavailabilitynewComponent } from './stockavailabilitynew.component';

describe('StockavailabilitynewComponent', () => {
  let component: StockavailabilitynewComponent;
  let fixture: ComponentFixture<StockavailabilitynewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockavailabilitynewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockavailabilitynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
