import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlabelapprovalComponent } from './brandlabelapproval.component';

describe('BrandlabelapprovalComponent', () => {
  let component: BrandlabelapprovalComponent;
  let fixture: ComponentFixture<BrandlabelapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlabelapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlabelapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
