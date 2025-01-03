import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdamageproductsComponent } from './viewdamageproducts.component';

describe('ViewdamageproductsComponent', () => {
  let component: ViewdamageproductsComponent;
  let fixture: ComponentFixture<ViewdamageproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdamageproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdamageproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
