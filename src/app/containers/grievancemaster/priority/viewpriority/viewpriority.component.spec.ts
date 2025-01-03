import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpriorityComponent } from './viewpriority.component';

describe('ViewpriorityComponent', () => {
  let component: ViewpriorityComponent;
  let fixture: ComponentFixture<ViewpriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
