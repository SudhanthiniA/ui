import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingprodplannewupComponent } from './bottlingprodplannewup.component';

describe('BottlingprodplannewupComponent', () => {
  let component: BottlingprodplannewupComponent;
  let fixture: ComponentFixture<BottlingprodplannewupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingprodplannewupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingprodplannewupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
