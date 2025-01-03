import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandwisereportComponent } from './brandwisereport.component';

describe('BrandwisereportComponent', () => {
  let component: BrandwisereportComponent;
  let fixture: ComponentFixture<BrandwisereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandwisereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
