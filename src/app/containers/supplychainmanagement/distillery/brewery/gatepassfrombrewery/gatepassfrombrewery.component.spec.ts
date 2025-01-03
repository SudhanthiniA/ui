import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepassfrombreweryComponent } from './gatepassfrombrewery.component';

describe('GatepassfrombreweryComponent', () => {
  let component: GatepassfrombreweryComponent;
  let fixture: ComponentFixture<GatepassfrombreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatepassfrombreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatepassfrombreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
