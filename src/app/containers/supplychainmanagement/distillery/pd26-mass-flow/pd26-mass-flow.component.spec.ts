import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26MassFlowComponent } from './pd26-mass-flow.component';

describe('Pd26MassFlowComponent', () => {
  let component: Pd26MassFlowComponent;
  let fixture: ComponentFixture<Pd26MassFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26MassFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26MassFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
