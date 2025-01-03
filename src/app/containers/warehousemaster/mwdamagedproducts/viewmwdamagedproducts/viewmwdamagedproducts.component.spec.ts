import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwdamagedproductsComponent } from './viewmwdamagedproducts.component';

describe('ViewmwdamagedproductsComponent', () => {
  let component: ViewmwdamagedproductsComponent;
  let fixture: ComponentFixture<ViewmwdamagedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwdamagedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwdamagedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
