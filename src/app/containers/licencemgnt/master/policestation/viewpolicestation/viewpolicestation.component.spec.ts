import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpolicestationComponent } from './viewpolicestation.component';

describe('ViewpolicestationComponent', () => {
  let component: ViewpolicestationComponent;
  let fixture: ComponentFixture<ViewpolicestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpolicestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpolicestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
