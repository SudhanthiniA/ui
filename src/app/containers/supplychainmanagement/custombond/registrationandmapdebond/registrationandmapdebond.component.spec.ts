import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationandmapdebondComponent } from './registrationandmapdebond.component';

describe('RegistrationandmapdebondComponent', () => {
  let component: RegistrationandmapdebondComponent;
  let fixture: ComponentFixture<RegistrationandmapdebondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationandmapdebondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationandmapdebondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
