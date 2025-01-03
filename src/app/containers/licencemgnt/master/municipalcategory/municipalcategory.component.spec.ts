import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalcategoryComponent } from './municipalcategory.component';

describe('MunicipalcategoryComponent', () => {
  let component: MunicipalcategoryComponent;
  let fixture: ComponentFixture<MunicipalcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
