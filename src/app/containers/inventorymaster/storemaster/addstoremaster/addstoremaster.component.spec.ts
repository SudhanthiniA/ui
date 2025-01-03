import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstoremasterComponent } from './addstoremaster.component';

describe('AddstoremasterComponent', () => {
  let component: AddstoremasterComponent;
  let fixture: ComponentFixture<AddstoremasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstoremasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstoremasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
