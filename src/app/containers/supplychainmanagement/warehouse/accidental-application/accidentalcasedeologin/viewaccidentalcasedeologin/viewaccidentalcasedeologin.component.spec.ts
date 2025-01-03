import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccidentalcasedeologinComponent } from './viewaccidentalcasedeologin.component';

describe('ViewaccidentalcasedeologinComponent', () => {
  let component: ViewaccidentalcasedeologinComponent;
  let fixture: ComponentFixture<ViewaccidentalcasedeologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccidentalcasedeologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccidentalcasedeologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
