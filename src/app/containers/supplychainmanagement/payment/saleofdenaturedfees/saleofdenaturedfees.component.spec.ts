import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleofdenaturedfeesComponent } from './saleofdenaturedfees.component';

describe('SaleofdenaturedfeesComponent', () => {
  let component: SaleofdenaturedfeesComponent;
  let fixture: ComponentFixture<SaleofdenaturedfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleofdenaturedfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleofdenaturedfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
