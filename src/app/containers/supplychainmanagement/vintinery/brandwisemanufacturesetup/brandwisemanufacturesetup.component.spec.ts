import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandwisemanufacturesetupComponent } from './brandwisemanufacturesetup.component';

describe('BrandwisemanufacturesetupComponent', () => {
  let component: BrandwisemanufacturesetupComponent;
  let fixture: ComponentFixture<BrandwisemanufacturesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandwisemanufacturesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandwisemanufacturesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
