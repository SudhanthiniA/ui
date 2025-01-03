import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsettingofcamerasandlogdetailsComponent } from './viewsettingofcamerasandlogdetails.component';

describe('ViewsettingofcamerasandlogdetailsComponent', () => {
  let component: ViewsettingofcamerasandlogdetailsComponent;
  let fixture: ComponentFixture<ViewsettingofcamerasandlogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsettingofcamerasandlogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsettingofcamerasandlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
