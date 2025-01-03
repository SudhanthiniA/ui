import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnconfirmationComponent } from './returnconfirmation.component';

describe('ReturnconfirmationComponent', () => {
  let component: ReturnconfirmationComponent;
  let fixture: ComponentFixture<ReturnconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
