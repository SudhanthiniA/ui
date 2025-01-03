import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencecategoryComponent } from './licencecategory.component';

describe('LicencecategoryComponent', () => {
  let component: LicencecategoryComponent;
  let fixture: ComponentFixture<LicencecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
