import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd8FormComponent } from './pd8-form.component';

describe('Pd8FormComponent', () => {
  let component: Pd8FormComponent;
  let fixture: ComponentFixture<Pd8FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd8FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd8FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
