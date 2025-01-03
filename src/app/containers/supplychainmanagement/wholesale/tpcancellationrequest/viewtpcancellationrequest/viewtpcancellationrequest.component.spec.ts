import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtpcancellationrequestComponent } from './viewtpcancellationrequest.component';

describe('ViewtpcancellationrequestComponent', () => {
  let component: ViewtpcancellationrequestComponent;
  let fixture: ComponentFixture<ViewtpcancellationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtpcancellationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtpcancellationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
