import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtankregistrationComponent } from './viewtankregistration.component';

describe('ViewtankregistrationComponent', () => {
  let component: ViewtankregistrationComponent;
  let fixture: ComponentFixture<ViewtankregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtankregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtankregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
