import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondregistrationComponent } from './bondregistration.component';

describe('BondregistrationComponent', () => {
  let component: BondregistrationComponent;
  let fixture: ComponentFixture<BondregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
