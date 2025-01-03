import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd32FormComponent } from './pd32-form.component';

describe('Pd32FormComponent', () => {
  let component: Pd32FormComponent;
  let fixture: ComponentFixture<Pd32FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd32FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd32FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
