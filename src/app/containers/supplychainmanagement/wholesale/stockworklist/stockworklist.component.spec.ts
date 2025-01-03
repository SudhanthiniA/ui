import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockworklistComponent } from './stockworklist.component';

describe('StockworklistComponent', () => {
  let component: StockworklistComponent;
  let fixture: ComponentFixture<StockworklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockworklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
