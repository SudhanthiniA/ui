import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoutsideComponent } from './viewoutside.component';

describe('ViewoutsideComponent', () => {
  let component: ViewoutsideComponent;
  let fixture: ComponentFixture<ViewoutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewoutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
