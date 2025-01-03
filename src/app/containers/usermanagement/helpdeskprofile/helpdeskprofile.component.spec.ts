import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskprofileComponent } from './helpdeskprofile.component';

describe('HelpdeskprofileComponent', () => {
  let component: HelpdeskprofileComponent;
  let fixture: ComponentFixture<HelpdeskprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
