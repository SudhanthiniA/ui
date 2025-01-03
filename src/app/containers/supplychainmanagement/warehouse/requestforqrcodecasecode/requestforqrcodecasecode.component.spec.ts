import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforqrcodecasecodeComponent } from './requestforqrcodecasecode.component';

describe('RequestforqrcodecasecodeComponent', () => {
  let component: RequestforqrcodecasecodeComponent;
  let fixture: ComponentFixture<RequestforqrcodecasecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforqrcodecasecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforqrcodecasecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
