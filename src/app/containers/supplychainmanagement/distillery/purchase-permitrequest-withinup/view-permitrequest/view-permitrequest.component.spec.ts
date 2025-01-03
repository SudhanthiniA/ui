import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPermitrequestComponent } from './view-permitrequest.component';

describe('ViewPermitrequestComponent', () => {
  let component: ViewPermitrequestComponent;
  let fixture: ComponentFixture<ViewPermitrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPermitrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPermitrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
