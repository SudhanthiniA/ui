import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditlicencecategoryComponent } from './addeditlicencecategory.component';

describe('AddeditlicencecategoryComponent', () => {
  let component: AddeditlicencecategoryComponent;
  let fixture: ComponentFixture<AddeditlicencecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditlicencecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditlicencecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
