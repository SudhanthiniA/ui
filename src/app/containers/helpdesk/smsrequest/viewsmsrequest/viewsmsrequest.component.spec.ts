import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsmsrequestComponent } from './viewsmsrequest.component';

describe('ViewsmsrequestComponent', () => {
  let component: ViewsmsrequestComponent;
  let fixture: ComponentFixture<ViewsmsrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsmsrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsmsrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
