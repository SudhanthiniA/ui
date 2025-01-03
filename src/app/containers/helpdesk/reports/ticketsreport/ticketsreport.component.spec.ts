import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsreportComponent } from './ticketsreport.component';

describe('TicketsreportComponent', () => {
  let component: TicketsreportComponent;
  let fixture: ComponentFixture<TicketsreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
