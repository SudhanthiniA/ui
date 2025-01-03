import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmunicipalcategoryComponent } from './viewmunicipalcategory.component';

describe('ViewmunicipalcategoryComponent', () => {
  let component: ViewmunicipalcategoryComponent;
  let fixture: ComponentFixture<ViewmunicipalcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmunicipalcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmunicipalcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
