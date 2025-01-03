import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVerificationtypeComponent } from './view-verificationtype.component';

describe('ViewVerificationtypeComponent', () => {
  let component: ViewVerificationtypeComponent;
  let fixture: ComponentFixture<ViewVerificationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVerificationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVerificationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
