import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequestforextensionpermitvalidityComponent } from './viewrequestforextensionpermitvalidity.component';

describe('ViewrequestforextensionpermitvalidityComponent', () => {
  let component: ViewrequestforextensionpermitvalidityComponent;
  let fixture: ComponentFixture<ViewrequestforextensionpermitvalidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequestforextensionpermitvalidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequestforextensionpermitvalidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
