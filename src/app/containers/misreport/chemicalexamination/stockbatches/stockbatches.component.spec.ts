import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockbatchesComponent } from './stockbatches.component';

describe('StockbatchesComponent', () => {
  let component: StockbatchesComponent;
  let fixture: ComponentFixture<StockbatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockbatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
