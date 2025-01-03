import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpoweralcoholmoveamendrptComponent } from './viewpoweralcoholmoveamendrpt.component';

describe('ViewpoweralcoholmoveamendrptComponent', () => {
  let component: ViewpoweralcoholmoveamendrptComponent;
  let fixture: ComponentFixture<ViewpoweralcoholmoveamendrptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpoweralcoholmoveamendrptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpoweralcoholmoveamendrptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
