import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentsdispatchedComponent } from './viewindentsdispatched.component';

describe('ViewindentsdispatchedComponent', () => {
  let component: ViewindentsdispatchedComponent;
  let fixture: ComponentFixture<ViewindentsdispatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentsdispatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentsdispatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
