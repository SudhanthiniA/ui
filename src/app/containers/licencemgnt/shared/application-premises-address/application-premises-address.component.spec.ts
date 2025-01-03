import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPremisesAddressComponent } from './application-premises-address.component';

describe('ApplicationPremisesAddressComponent', () => {
  let component: ApplicationPremisesAddressComponent;
  let fixture: ComponentFixture<ApplicationPremisesAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPremisesAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPremisesAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
