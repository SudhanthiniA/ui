import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditapplicationtypeComponent } from './addeditapplicationtype.component';

describe('AddeditapplicationtypeComponent', () => {
  let component: AddeditapplicationtypeComponent;
  let fixture: ComponentFixture<AddeditapplicationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditapplicationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditapplicationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
