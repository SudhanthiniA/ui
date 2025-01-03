import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditsubcategoryComponent } from './addeditsubcategory.component';

describe('AddeditsubcategoryComponent', () => {
  let component: AddeditsubcategoryComponent;
  let fixture: ComponentFixture<AddeditsubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditsubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
