import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseealrequestComponent } from './raiseealrequest.component';

describe('RaiseealrequestComponent', () => {
  let component: RaiseealrequestComponent;
  let fixture: ComponentFixture<RaiseealrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseealrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseealrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
