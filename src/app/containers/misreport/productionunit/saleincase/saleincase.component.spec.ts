import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleincaseComponent } from './saleincase.component';

describe('SaleincaseComponent', () => {
  let component: SaleincaseComponent;
  let fixture: ComponentFixture<SaleincaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleincaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleincaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
