import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdistillerytypeComponent } from './viewdistillerytype.component';

describe('ViewdistillerytypeComponent', () => {
  let component: ViewdistillerytypeComponent;
  let fixture: ComponentFixture<ViewdistillerytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdistillerytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdistillerytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
