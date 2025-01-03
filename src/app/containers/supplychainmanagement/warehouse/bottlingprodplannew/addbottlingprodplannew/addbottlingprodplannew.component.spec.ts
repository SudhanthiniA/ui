import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingprodplannewComponent } from './addbottlingprodplannew.component';

describe('AddbottlingprodplannewComponent', () => {
  let component: AddbottlingprodplannewComponent;
  let fixture: ComponentFixture<AddbottlingprodplannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingprodplannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingprodplannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
