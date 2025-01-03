import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddslaComponent } from './addsla.component';

describe('AddslaComponent', () => {
  let component: AddslaComponent;
  let fixture: ComponentFixture<AddslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
