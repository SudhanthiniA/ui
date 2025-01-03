import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyonnonexecofindComponent } from './penaltyonnonexecofind.component';

describe('PenaltyonnonexecofindComponent', () => {
  let component: PenaltyonnonexecofindComponent;
  let fixture: ComponentFixture<PenaltyonnonexecofindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyonnonexecofindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyonnonexecofindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
