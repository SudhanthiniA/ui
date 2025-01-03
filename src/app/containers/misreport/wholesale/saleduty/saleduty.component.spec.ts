import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaledutyComponent } from './saleduty.component';

describe('SaledutyComponent', () => {
  let component: SaledutyComponent;
  let fixture: ComponentFixture<SaledutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaledutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaledutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
