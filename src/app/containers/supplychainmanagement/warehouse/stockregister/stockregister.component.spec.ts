import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockregisterComponent } from './stockregister.component';

describe('StockregisterComponent', () => {
  let component: StockregisterComponent;
  let fixture: ComponentFixture<StockregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
