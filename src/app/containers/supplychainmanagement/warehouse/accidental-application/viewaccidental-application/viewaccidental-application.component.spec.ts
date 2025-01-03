import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccidentalApplicationComponent } from './viewaccidental-application.component';

describe('ViewaccidentalApplicationComponent', () => {
  let component: ViewaccidentalApplicationComponent;
  let fixture: ComponentFixture<ViewaccidentalApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccidentalApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccidentalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
