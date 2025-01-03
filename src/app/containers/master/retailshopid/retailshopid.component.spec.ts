import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailshopidComponent } from './retailshopid.component';

describe('RetailshopidComponent', () => {
  let component: RetailshopidComponent;
  let fixture: ComponentFixture<RetailshopidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailshopidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailshopidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
