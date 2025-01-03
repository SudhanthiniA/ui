import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsummaryComponent } from './ticketsummary.component';

describe('TicketsummaryComponent', () => {
  let component: TicketsummaryComponent;
  let fixture: ComponentFixture<TicketsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
