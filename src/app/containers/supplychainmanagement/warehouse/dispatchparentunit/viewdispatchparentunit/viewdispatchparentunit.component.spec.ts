import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdispatchparentunitComponent } from './viewdispatchparentunit.component';

describe('ViewdispatchparentunitComponent', () => {
  let component: ViewdispatchparentunitComponent;
  let fixture: ComponentFixture<ViewdispatchparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdispatchparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdispatchparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
