import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandregistrationComponent } from './viewbrandregistration.component';

describe('ViewbrandregistrationComponent', () => {
  let component: ViewbrandregistrationComponent;
  let fixture: ComponentFixture<ViewbrandregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
