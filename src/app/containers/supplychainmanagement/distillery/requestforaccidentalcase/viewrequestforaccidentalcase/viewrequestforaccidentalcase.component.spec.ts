import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequestforaccidentalcaseComponent } from './viewrequestforaccidentalcase.component';

describe('ViewrequestforaccidentalcaseComponent', () => {
  let component: ViewrequestforaccidentalcaseComponent;
  let fixture: ComponentFixture<ViewrequestforaccidentalcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequestforaccidentalcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequestforaccidentalcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
