import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccidentalrequestComponent } from './viewaccidentalrequest.component';

describe('ViewaccidentalrequestComponent', () => {
  let component: ViewaccidentalrequestComponent;
  let fixture: ComponentFixture<ViewaccidentalrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccidentalrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccidentalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
