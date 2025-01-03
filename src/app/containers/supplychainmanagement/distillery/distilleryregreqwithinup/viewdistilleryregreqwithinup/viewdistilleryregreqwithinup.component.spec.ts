import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdistilleryregreqwithinupComponent } from './viewdistilleryregreqwithinup.component';

describe('ViewdistilleryregreqwithinupComponent', () => {
  let component: ViewdistilleryregreqwithinupComponent;
  let fixture: ComponentFixture<ViewdistilleryregreqwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdistilleryregreqwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdistilleryregreqwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
