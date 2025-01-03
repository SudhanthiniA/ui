import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingproductionplanComponent } from './addbottlingproductionplan.component';

describe('AddbottlingproductionplanComponent', () => {
  let component: AddbottlingproductionplanComponent;
  let fixture: ComponentFixture<AddbottlingproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
