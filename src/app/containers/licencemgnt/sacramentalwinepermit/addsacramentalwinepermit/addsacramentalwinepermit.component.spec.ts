import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsacramentalwinepermitComponent } from './addsacramentalwinepermit.component';

describe('AddsacramentalwinepermitComponent', () => {
  let component: AddsacramentalwinepermitComponent;
  let fixture: ComponentFixture<AddsacramentalwinepermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsacramentalwinepermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsacramentalwinepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
