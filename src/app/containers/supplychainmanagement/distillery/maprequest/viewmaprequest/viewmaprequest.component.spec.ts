import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmaprequestComponent } from './viewmaprequest.component';

describe('ViewmaprequestComponent', () => {
  let component: ViewmaprequestComponent;
  let fixture: ComponentFixture<ViewmaprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmaprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmaprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
