import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketdetailsactionComponent } from './ticketdetailsaction.component';

describe('TicketdetailsactionComponent', () => {
  let component: TicketdetailsactionComponent;
  let fixture: ComponentFixture<TicketdetailsactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketdetailsactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketdetailsactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
