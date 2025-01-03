import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvsearchlicregComponent } from './advsearchlicreg.component';

describe('AdvsearchlicregComponent', () => {
  let component: AdvsearchlicregComponent;
  let fixture: ComponentFixture<AdvsearchlicregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvsearchlicregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvsearchlicregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
