import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceviewComponent } from './acceptanceview.component';

describe('AcceptanceviewComponent', () => {
  let component: AcceptanceviewComponent;
  let fixture: ComponentFixture<AcceptanceviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
