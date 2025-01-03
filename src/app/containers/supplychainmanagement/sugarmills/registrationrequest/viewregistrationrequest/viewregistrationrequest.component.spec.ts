import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregistrationrequestComponent } from './viewregistrationrequest.component';

describe('ViewregistrationrequestComponent', () => {
  let component: ViewregistrationrequestComponent;
  let fixture: ComponentFixture<ViewregistrationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewregistrationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregistrationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
