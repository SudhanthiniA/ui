import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbondregistrationComponent } from './viewbondregistration.component';

describe('ViewbondregistrationComponent', () => {
  let component: ViewbondregistrationComponent;
  let fixture: ComponentFixture<ViewbondregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbondregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbondregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
