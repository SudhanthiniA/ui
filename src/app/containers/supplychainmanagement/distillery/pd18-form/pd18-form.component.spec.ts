import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd18FormComponent } from './pd18-form.component';

describe('Pd18FormComponent', () => {
  let component: Pd18FormComponent;
  let fixture: ComponentFixture<Pd18FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd18FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd18FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
