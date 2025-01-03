import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMunicipalityComponent } from './view-municipality.component';

describe('ViewMunicipalityComponent', () => {
  let component: ViewMunicipalityComponent;
  let fixture: ComponentFixture<ViewMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
