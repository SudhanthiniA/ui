import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwdamagedproductsComponent } from './mwdamagedproducts.component';

describe('MwdamagedproductsComponent', () => {
  let component: MwdamagedproductsComponent;
  let fixture: ComponentFixture<MwdamagedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwdamagedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwdamagedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
