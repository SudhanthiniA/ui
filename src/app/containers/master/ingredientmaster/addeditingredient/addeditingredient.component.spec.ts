import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditingredientComponent } from './addeditingredient.component';

describe('AddeditingredientComponent', () => {
  let component: AddeditingredientComponent;
  let fixture: ComponentFixture<AddeditingredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditingredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
