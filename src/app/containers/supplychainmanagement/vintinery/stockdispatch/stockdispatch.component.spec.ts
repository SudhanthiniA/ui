import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockdispatchComponent } from './stockdispatch.component';

describe('StockdispatchComponent', () => {
  let component: StockdispatchComponent;
  let fixture: ComponentFixture<StockdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
