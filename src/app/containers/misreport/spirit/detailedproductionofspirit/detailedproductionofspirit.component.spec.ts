import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedproductionofspiritComponent } from './detailedproductionofspirit.component';

describe('DetailedproductionofspiritComponent', () => {
  let component: DetailedproductionofspiritComponent;
  let fixture: ComponentFixture<DetailedproductionofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedproductionofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedproductionofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
