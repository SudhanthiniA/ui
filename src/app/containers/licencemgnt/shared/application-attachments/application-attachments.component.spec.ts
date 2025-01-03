import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAttachmentsComponent } from './application-attachments.component';

describe('ApplicationAttachmentsComponent', () => {
  let component: ApplicationAttachmentsComponent;
  let fixture: ComponentFixture<ApplicationAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
