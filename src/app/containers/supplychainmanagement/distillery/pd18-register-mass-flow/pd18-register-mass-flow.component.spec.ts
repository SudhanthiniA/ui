import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd18RegisterMassFlowComponent } from './pd18-register-mass-flow.component';

describe('Pd18RegisterMassFlowComponent', () => {
  let component: Pd18RegisterMassFlowComponent;
  let fixture: ComponentFixture<Pd18RegisterMassFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd18RegisterMassFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd18RegisterMassFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
