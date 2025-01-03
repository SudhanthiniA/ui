import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepasscancellationComponent } from './gatepasscancellation.component';

describe('GatepasscancellationComponent', () => {
  let component: GatepasscancellationComponent;
  let fixture: ComponentFixture<GatepasscancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatepasscancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatepasscancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
