import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingprodplannewupComponent } from './addbottlingprodplannewup.component';

describe('AddbottlingprodplannewupComponent', () => {
  let component: AddbottlingprodplannewupComponent;
  let fixture: ComponentFixture<AddbottlingprodplannewupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingprodplannewupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingprodplannewupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
