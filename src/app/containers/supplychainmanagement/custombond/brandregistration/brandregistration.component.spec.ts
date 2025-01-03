import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandregistrationComponent } from './brandregistration.component';

describe('BrandregistrationComponent', () => {
  let component: BrandregistrationComponent;
  let fixture: ComponentFixture<BrandregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
