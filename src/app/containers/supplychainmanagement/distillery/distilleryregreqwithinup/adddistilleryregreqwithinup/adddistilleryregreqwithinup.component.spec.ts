import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddistilleryregreqwithinupComponent } from './adddistilleryregreqwithinup.component';

describe('AdddistilleryregreqwithinupComponent', () => {
  let component: AdddistilleryregreqwithinupComponent;
  let fixture: ComponentFixture<AdddistilleryregreqwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddistilleryregreqwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddistilleryregreqwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
