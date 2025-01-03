import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationandmapcbComponent } from './registrationandmapcb.component';

describe('RegistrationandmapcbComponent', () => {
  let component: RegistrationandmapcbComponent;
  let fixture: ComponentFixture<RegistrationandmapcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationandmapcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationandmapcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
