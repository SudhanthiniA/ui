import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccidentalcaserequestComponent } from './viewaccidentalcaserequest.component';

describe('ViewaccidentalcaserequestComponent', () => {
  let component: ViewaccidentalcaserequestComponent;
  let fixture: ComponentFixture<ViewaccidentalcaserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccidentalcaserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccidentalcaserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
