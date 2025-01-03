import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingprodplannewupComponent } from './viewbottlingprodplannewup.component';

describe('ViewbottlingprodplannewupComponent', () => {
  let component: ViewbottlingprodplannewupComponent;
  let fixture: ComponentFixture<ViewbottlingprodplannewupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingprodplannewupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingprodplannewupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
