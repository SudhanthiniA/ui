import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditrevenueComponent } from './addeditrevenue.component';

describe('AddeditrevenueComponent', () => {
  let component: AddeditrevenueComponent;
  let fixture: ComponentFixture<AddeditrevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditrevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
