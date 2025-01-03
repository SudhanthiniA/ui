import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewticketdetailsComponent } from './viewticketdetails.component';

describe('ViewticketdetailsComponent', () => {
  let component: ViewticketdetailsComponent;
  let fixture: ComponentFixture<ViewticketdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewticketdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewticketdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
