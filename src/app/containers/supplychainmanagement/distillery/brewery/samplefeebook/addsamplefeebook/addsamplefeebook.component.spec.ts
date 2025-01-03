import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsamplefeebookComponent } from './addsamplefeebook.component';

describe('AddsamplefeebookComponent', () => {
  let component: AddsamplefeebookComponent;
  let fixture: ComponentFixture<AddsamplefeebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsamplefeebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsamplefeebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
