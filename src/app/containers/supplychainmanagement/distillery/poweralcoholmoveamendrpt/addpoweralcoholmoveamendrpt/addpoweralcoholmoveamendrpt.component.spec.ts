import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpoweralcoholmoveamendrptComponent } from './addpoweralcoholmoveamendrpt.component';

describe('AddpoweralcoholmoveamendrptComponent', () => {
  let component: AddpoweralcoholmoveamendrptComponent;
  let fixture: ComponentFixture<AddpoweralcoholmoveamendrptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpoweralcoholmoveamendrptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpoweralcoholmoveamendrptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
