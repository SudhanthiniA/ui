import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbwfparentunitregistrationComponent } from './viewbwfparentunitregistration.component';

describe('ViewbwfparentunitregistrationComponent', () => {
  let component: ViewbwfparentunitregistrationComponent;
  let fixture: ComponentFixture<ViewbwfparentunitregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbwfparentunitregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbwfparentunitregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
