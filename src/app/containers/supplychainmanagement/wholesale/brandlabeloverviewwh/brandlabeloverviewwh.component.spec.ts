import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlabeloverviewwhComponent } from './brandlabeloverviewwh.component';

describe('BrandlabeloverviewwhComponent', () => {
  let component: BrandlabeloverviewwhComponent;
  let fixture: ComponentFixture<BrandlabeloverviewwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlabeloverviewwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlabeloverviewwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
