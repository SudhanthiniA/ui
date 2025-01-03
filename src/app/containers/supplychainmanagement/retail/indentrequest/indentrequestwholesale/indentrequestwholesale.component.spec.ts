import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentrequestwholesaleComponent } from './indentrequestwholesale.component';

describe('IndentrequestwholesaleComponent', () => {
  let component: IndentrequestwholesaleComponent;
  let fixture: ComponentFixture<IndentrequestwholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentrequestwholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentrequestwholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
