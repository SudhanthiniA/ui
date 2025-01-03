import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddamageproductsComponent } from './adddamageproducts.component';

describe('AdddamageproductsComponent', () => {
  let component: AdddamageproductsComponent;
  let fixture: ComponentFixture<AdddamageproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddamageproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddamageproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
