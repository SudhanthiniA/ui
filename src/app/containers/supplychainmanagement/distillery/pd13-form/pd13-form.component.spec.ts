import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd13FormComponent } from './pd13-form.component';

describe('Pd13FormComponent', () => {
  let component: Pd13FormComponent;
  let fixture: ComponentFixture<Pd13FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd13FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd13FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
