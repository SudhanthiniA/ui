import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationrequestComponent } from './registrationrequest.component';

describe('RegistrationrequestComponent', () => {
  let component: RegistrationrequestComponent;
  let fixture: ComponentFixture<RegistrationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
