import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingredientComponent } from './viewingredient.component';

describe('ViewingredientComponent', () => {
  let component: ViewingredientComponent;
  let fixture: ComponentFixture<ViewingredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
