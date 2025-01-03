import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinnewComponent } from './stockinnew.component';

describe('StockinnewComponent', () => {
  let component: StockinnewComponent;
  let fixture: ComponentFixture<StockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
