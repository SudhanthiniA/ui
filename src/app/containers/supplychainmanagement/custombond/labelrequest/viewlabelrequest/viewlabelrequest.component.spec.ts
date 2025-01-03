import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlabelrequestComponent } from './viewlabelrequest.component';

describe('ViewlabelrequestComponent', () => {
  let component: ViewlabelrequestComponent;
  let fixture: ComponentFixture<ViewlabelrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlabelrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlabelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
