import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd32FormComponent } from './addpd32-form.component';

describe('Addpd32FormComponent', () => {
  let component: Addpd32FormComponent;
  let fixture: ComponentFixture<Addpd32FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd32FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd32FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
