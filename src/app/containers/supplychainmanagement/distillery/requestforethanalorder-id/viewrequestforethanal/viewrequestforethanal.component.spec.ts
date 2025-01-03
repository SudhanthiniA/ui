import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequestforethanalComponent } from './viewrequestforethanal.component';

describe('ViewrequestforethanalComponent', () => {
  let component: ViewrequestforethanalComponent;
  let fixture: ComponentFixture<ViewrequestforethanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequestforethanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequestforethanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
