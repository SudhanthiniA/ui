import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinnewqrscanComponent } from './stockinnewqrscan.component';

describe('StockinnewqrscanComponent', () => {
  let component: StockinnewqrscanComponent;
  let fixture: ComponentFixture<StockinnewqrscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinnewqrscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinnewqrscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
