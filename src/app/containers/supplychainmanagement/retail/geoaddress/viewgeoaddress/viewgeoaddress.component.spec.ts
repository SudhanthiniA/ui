import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgeoaddressComponent } from './viewgeoaddress.component';

describe('ViewgeoaddressComponent', () => {
  let component: ViewgeoaddressComponent;
  let fixture: ComponentFixture<ViewgeoaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgeoaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgeoaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
