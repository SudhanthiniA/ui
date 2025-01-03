import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskissuefromComponent } from './helpdeskissuefrom.component';

describe('HelpdeskissuefromComponent', () => {
  let component: HelpdeskissuefromComponent;
  let fixture: ComponentFixture<HelpdeskissuefromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskissuefromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskissuefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
