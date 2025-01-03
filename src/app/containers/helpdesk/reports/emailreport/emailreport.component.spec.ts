import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailreportComponent } from './emailreport.component';

describe('EmailreportComponent', () => {
  let component: EmailreportComponent;
  let fixture: ComponentFixture<EmailreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
