import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientmasterComponent } from './ingredientmaster.component';

describe('IngredientmasterComponent', () => {
  let component: IngredientmasterComponent;
  let fixture: ComponentFixture<IngredientmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
