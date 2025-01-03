import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransferexpiredComponent } from './stocktransferexpired.component';

describe('StocktransferexpiredComponent', () => {
  let component: StocktransferexpiredComponent;
  let fixture: ComponentFixture<StocktransferexpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktransferexpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktransferexpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
