import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportenaoutsidestateComponent } from './viewimportenaoutsidestate.component';

describe('ViewimportenaoutsidestateComponent', () => {
  let component: ViewimportenaoutsidestateComponent;
  let fixture: ComponentFixture<ViewimportenaoutsidestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportenaoutsidestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportenaoutsidestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
