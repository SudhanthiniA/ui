import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailrequestComponent } from './emailrequest.component';

describe('EmailrequestComponent', () => {
  let component: EmailrequestComponent;
  let fixture: ComponentFixture<EmailrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
