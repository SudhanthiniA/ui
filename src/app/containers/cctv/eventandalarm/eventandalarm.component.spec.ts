import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventandalarmComponent } from './eventandalarm.component';

describe('EventandalarmComponent', () => {
  let component: EventandalarmComponent;
  let fixture: ComponentFixture<EventandalarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventandalarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventandalarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
