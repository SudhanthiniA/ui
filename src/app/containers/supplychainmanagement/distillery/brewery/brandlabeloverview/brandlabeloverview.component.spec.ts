import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlabeloverviewComponent } from './brandlabeloverview.component';

describe('BrandlabeloverviewComponent', () => {
  let component: BrandlabeloverviewComponent;
  let fixture: ComponentFixture<BrandlabeloverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlabeloverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlabeloverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
