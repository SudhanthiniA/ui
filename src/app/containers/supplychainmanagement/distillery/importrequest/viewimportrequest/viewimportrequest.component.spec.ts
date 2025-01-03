import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportrequestComponent } from './viewimportrequest.component';

describe('ViewimportrequestComponent', () => {
  let component: ViewimportrequestComponent;
  let fixture: ComponentFixture<ViewimportrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
