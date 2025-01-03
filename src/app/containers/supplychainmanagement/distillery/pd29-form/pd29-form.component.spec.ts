import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd29FormComponent } from './pd29-form.component';

describe('Pd29FormComponent', () => {
  let component: Pd29FormComponent;
  let fixture: ComponentFixture<Pd29FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd29FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd29FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
