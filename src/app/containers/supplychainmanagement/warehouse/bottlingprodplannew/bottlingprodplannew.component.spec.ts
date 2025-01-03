import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingprodplannewComponent } from './bottlingprodplannew.component';

describe('BottlingprodplannewComponent', () => {
  let component: BottlingprodplannewComponent;
  let fixture: ComponentFixture<BottlingprodplannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingprodplannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingprodplannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
