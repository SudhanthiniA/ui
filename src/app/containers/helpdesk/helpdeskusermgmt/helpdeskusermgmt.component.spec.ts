import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskusermgmtComponent } from './helpdeskusermgmt.component';

describe('HelpdeskusermgmtComponent', () => {
  let component: HelpdeskusermgmtComponent;
  let fixture: ComponentFixture<HelpdeskusermgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskusermgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskusermgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
