import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalareacategoryComponent } from './municipalareacategory.component';

describe('MunicipalareacategoryComponent', () => {
  let component: MunicipalareacategoryComponent;
  let fixture: ComponentFixture<MunicipalareacategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalareacategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalareacategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
