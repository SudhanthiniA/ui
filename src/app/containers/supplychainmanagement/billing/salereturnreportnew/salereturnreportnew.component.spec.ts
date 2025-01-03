import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalereturnreportnewComponent } from './salereturnreportnew.component';

describe('SalereturnreportnewComponent', () => {
  let component: SalereturnreportnewComponent;
  let fixture: ComponentFixture<SalereturnreportnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalereturnreportnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalereturnreportnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
