import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingprodplannewComponent } from './viewbottlingprodplannew.component';

describe('ViewbottlingprodplannewComponent', () => {
  let component: ViewbottlingprodplannewComponent;
  let fixture: ComponentFixture<ViewbottlingprodplannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingprodplannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingprodplannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
