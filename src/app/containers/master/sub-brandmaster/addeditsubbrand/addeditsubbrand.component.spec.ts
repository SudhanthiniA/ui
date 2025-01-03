import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditsubbrandComponent } from './addeditsubbrand.component';

describe('AddeditsubbrandComponent', () => {
  let component: AddeditsubbrandComponent;
  let fixture: ComponentFixture<AddeditsubbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditsubbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditsubbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
