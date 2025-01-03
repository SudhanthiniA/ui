import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondwiseregistrationComponent } from './bondwiseregistration.component';

describe('BondwiseregistrationComponent', () => {
  let component: BondwiseregistrationComponent;
  let fixture: ComponentFixture<BondwiseregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondwiseregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondwiseregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
