import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencecategoriesComponent } from './licencecategories.component';

describe('LicencecategoriesComponent', () => {
  let component: LicencecategoriesComponent;
  let fixture: ComponentFixture<LicencecategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencecategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
