import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepasscancelComponent } from './gatepasscancel.component';

describe('GatepasscancelComponent', () => {
  let component: GatepasscancelComponent;
  let fixture: ComponentFixture<GatepasscancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatepasscancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatepasscancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
