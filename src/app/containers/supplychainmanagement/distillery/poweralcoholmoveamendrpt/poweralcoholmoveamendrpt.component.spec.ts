import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoweralcoholmoveamendrptComponent } from './poweralcoholmoveamendrpt.component';

describe('PoweralcoholmoveamendrptComponent', () => {
  let component: PoweralcoholmoveamendrptComponent;
  let fixture: ComponentFixture<PoweralcoholmoveamendrptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoweralcoholmoveamendrptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoweralcoholmoveamendrptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
